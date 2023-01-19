import { createGame, GameInfo } from "../domain/game";
import { addGameToCollection } from "../domain/gameCollection";
import { GameCollectionUseCase } from "./types/GameCollectionUseCase";

export type AddGameProps = GameCollectionUseCase & {
    gameInfo: GameInfo;
};

export async function addGameUseCase(props: AddGameProps): Promise<void> {
    const newGame = await props.repo.createGame(props.gameInfo);
    const newCollection = addGameToCollection(props.data, createGame(
        newGame.id,
        newGame.title,
        newGame.description,
    ));

    props.presenter.present(newCollection);
}