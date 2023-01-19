import { Game, GameID, GameInfo } from "./game";
import { GameCollection } from "./gameCollection";

export interface GameCollectionRepo {
    load(): Promise<GameCollection>;
    createGame(gameInfo: GameInfo): Promise<Game>;
    modifyGame(id: GameID, gameInfo: GameInfo): Promise<Game>;
    removeGame(id: GameID): Promise<void>;
}