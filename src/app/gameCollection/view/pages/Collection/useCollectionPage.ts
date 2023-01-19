import { useEffect, useState } from "react";
import { Game, GameInfo } from "../../../domain/game";
import { useGameCollection } from "../../../controller/useGameCollection";
import { GameFormProps } from "../../components/GameForm/GameFormProps";
import { GameRemoveFormProps } from "../../components/GameRemoveForm/GameFormRemoveProps";

type FormProps = Omit<GameFormProps, "onHide">
type RemoveFormProps = Omit<GameRemoveFormProps, "onHide">

export const useCollectionPage = () => {
    const {
        state,
        error,
        isFirstLoading,
        isLoading,
        loadCollection,
        addGame,
        modifyGame,
        removeGame,
    } = useGameCollection();
    const [formProps, setFormProps] = useState<FormProps>({
        show: false,
        isModify: false,
        gameInfo: undefined,
        onSubmit: async (gameInfo: GameInfo) => { },
    });
    const [removeFormProps, setRemoveFormProps] = useState<RemoveFormProps>({
        show: false,
        gameInfo: { title: "", description: "" },
        onAccept: async () => { },
    });
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        loadCollection();
    }, []);

    useEffect(() => {
        if (error) setShowError(true);
    }, [error]);

    const onCloseError = () => setShowError(false);

    const onClose = () => setFormProps({
        show: false,
        isModify: false,
        gameInfo: undefined,
        onSubmit: async (_) => { },
    });

    const onCloseRemove = () => setRemoveFormProps({
        show: false,
        gameInfo: { title: "", description: "" },
        onAccept: async () => { },
    });

    const onClickAdd = () => {
        setFormProps({
            show: true,
            isModify: false,
            onSubmit: async (gameInfo) => {
                await addGame(gameInfo);
                onClose();
            },
        });
    }

    const onClickModify = (game: Game) => {
        setFormProps({
            show: true,
            isModify: true,
            gameInfo: game as GameInfo,
            onSubmit: async (gameInfo) => {
                await modifyGame({
                    id: game.id,
                    ...gameInfo,
                });
                onClose();
            },
        });
    }

    const onClickRemove = (game: Game) => {
        setRemoveFormProps({
            show: true,
            gameInfo: game as GameInfo,
            onAccept: async () => {
                await removeGame({
                    id: game.id,
                });
                onCloseRemove();
            },
        });
    }

    return {
        state,
        error,
        isFirstLoading,
        isLoading,
        loadCollection,
        addGame,
        modifyGame,
        removeGame,

        formProps,
        removeFormProps,
        showError,

        onCloseError,
        onClose,
        onCloseRemove,
        onClickAdd,
        onClickModify,
        onClickRemove,
    }
}