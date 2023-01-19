import { createGame, GameInfo } from "../domain/game";
import { addGameToCollection, GameCollection } from "../domain/gameCollection";
import { UseCaseProps } from "../../main/useCases/types/UseCaseProps";

export type AddGameProps = UseCaseProps & {
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