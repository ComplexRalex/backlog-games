import { changeGameInfo, GameID, GameInfo } from "../domain/game";
import { addGameToCollection } from "../domain/gameCollection";
import { GameCollectionUseCase } from "./types/GameCollectionUseCase";

export type ModifyGameProps = GameCollectionUseCase & {
    gameId: GameID,
    gameInfo: GameInfo;
};

export async function modifyGameUseCase(props: ModifyGameProps): Promise<void> {
    const modifiedGame = changeGameInfo(
        props.gameId,
        props.gameInfo.title,
        props.gameInfo.description
    );
    const newCollection = addGameToCollection(props.data, modifiedGame);
    await props.repo.modifyGame(props.gameId, props.gameInfo);
    
    props.presenter.present(newCollection);
}