import { GameID } from "../domain/game";
import { GameCollection, removeGameFromCollection } from "../domain/gameCollection";
import { UseCaseProps } from "../../main/useCases/types/UseCaseProps";

export type RemoveGameProps = UseCaseProps & {
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