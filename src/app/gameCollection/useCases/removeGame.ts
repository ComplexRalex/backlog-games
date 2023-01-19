import { GameID } from "../domain/game";
import { removeGameFromCollection } from "../domain/gameCollection";
import { GameCollectionUseCase } from "./types/GameCollectionUseCase";

export type RemoveGameProps = GameCollectionUseCase & {
    gameId: GameID,
};

export async function removeGameUseCase(props: RemoveGameProps): Promise<void> {
    const newCollection = removeGameFromCollection(
        props.data,
        props.gameId
    );
    await props.repo.removeGame(props.gameId);

    props.presenter.present(newCollection);
}