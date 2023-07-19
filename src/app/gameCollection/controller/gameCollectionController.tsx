import { createContext, useState, useMemo, useCallback } from "react";

import { createGameCollection, GameCollection } from "../domain/gameCollection";
import { addGameUseCase } from "../useCases/addGame";
import { modifyGameUseCase } from "../useCases/modifyGame";
import { removeGameUseCase } from "../useCases/removeGame";
import { GameCollectionPresenter } from "../useCases/types/GameCollectionPresenter";

// * This is a implementation for PocketBase
// import { GameCollectionPB } from "../data/gameCollectionPB";
// const gameCollectionRepo = new GameCollectionPB();

// * This is a implementation for LocalStorage
import { GameCollectionLS } from "../data/gameCollectionLS";
const gameCollectionRepo = new GameCollectionLS();

import { GameCollectionState } from "./gameCollectionState";

const initialState: GameCollectionState = {
    collection: createGameCollection(),
}

export namespace GameCollectionProviderProps {
    export type AddGame = { title: string, description?: string };
    export type ModifyGame = { id: string, title: string, description?: string };
    export type RemoveGame = { id: string };
}

export interface GameCollectionProviderValue {
    state: GameCollectionState;
    isFirstLoading: boolean;
    isLoading: boolean;
    error: any;
    loadCollection: () => Promise<void>;
    addGame: (props: GameCollectionProviderProps.AddGame) => Promise<void>;
    modifyGame: (props: GameCollectionProviderProps.ModifyGame) => Promise<void>;
    removeGame: (props: GameCollectionProviderProps.RemoveGame) => Promise<void>;
}

const initialValue: GameCollectionProviderValue = {
    state: initialState,
    isFirstLoading: true,
    isLoading: false,
    error: undefined,
    loadCollection: async () => { },
    addGame: async () => { },
    modifyGame: async () => { },
    removeGame: async () => { },
}

export const GameCollectionContext = createContext(initialValue);

export const GameCollectionProvider = ({ children }: any): JSX.Element => {
    const [state, setState] = useState<GameCollectionState>(initialState);
    const [error, setError] = useState<any>();
    const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const gameCollectionPresenter: GameCollectionPresenter = useMemo(() => ({
        present: (gameCollection: GameCollection) => {
            setState({ collection: gameCollection });
        }
    }), []);

    function describeError(error: any) {
        return error.message;
    }

    const loadCollection = useCallback(async () => {
        try {
            setError(undefined);
            setIsFirstLoading(true);
            const gameCollection = await gameCollectionRepo.load();
            setState({ collection: gameCollection });
        } catch (error) {
            setError(describeError(error));
        } finally {
            setIsFirstLoading(false);
        }
    }, []);

    const addGame = useCallback(async ({
        title,
        description
    }: GameCollectionProviderProps.AddGame) => {
        try {
            setError(undefined);
            setIsLoading(true);
            await addGameUseCase({
                data: state.collection,
                gameInfo: { title, description },
                repo: gameCollectionRepo,
                presenter: gameCollectionPresenter,
            });
        } catch (error) {
            setError(describeError(error));
        } finally {
            setIsLoading(false);
        }
    }, [state, gameCollectionPresenter]);

    const modifyGame = useCallback(async ({
        id,
        title,
        description
    }: GameCollectionProviderProps.ModifyGame) => {
        try {
            setError(undefined);
            setIsLoading(true);
            await modifyGameUseCase({
                data: state.collection,
                gameId: id,
                gameInfo: { title, description },
                repo: gameCollectionRepo,
                presenter: gameCollectionPresenter,
            });
        } catch (error) {
            setError(describeError(error));
        } finally {
            setIsLoading(false);
        }
    }, [state, gameCollectionPresenter]);

    const removeGame = useCallback(async ({
        id
    }: GameCollectionProviderProps.RemoveGame) => {
        try {
            setError(undefined);
            setIsLoading(true);
            await removeGameUseCase({
                data: state.collection,
                gameId: id,
                repo: gameCollectionRepo,
                presenter: gameCollectionPresenter,
            });
        } catch (error) {
            setError(describeError(error));
        } finally {
            setIsLoading(false);
        }
    }, [state, gameCollectionPresenter]);

    const values = useMemo<GameCollectionProviderValue>(() => ({
        state,
        error,
        isFirstLoading,
        isLoading,
        loadCollection,
        addGame,
        modifyGame,
        removeGame,
    }), [
        state,
        error,
        isFirstLoading,
        isLoading,
        loadCollection,
        addGame,
        modifyGame,
        removeGame
    ]);

    return (
        <GameCollectionContext.Provider value={values}>
            {children}
        </GameCollectionContext.Provider>
    );
}