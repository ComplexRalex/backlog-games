import { GameInfo, Game, createGame, GameID } from "../domain/game";
import { GameCollection } from "../domain/gameCollection";
import { GameCollectionRepo } from "../domain/gameCollectionRepo";
import httpClient from "../../main/request/httpClient";

export class GameCollectionPB implements GameCollectionRepo {
    async load(): Promise<GameCollection> {
        const resp = await httpClient.get(
            "collections/games/records?sort=-updated&perPage=256",
        );
        const data = await resp.json();
        return {
            games: data['items'].map((game: any) => createGame(
                game["id"], game["title"], game["description"],
            )),
        };
    }

    async createGame(gameInfo: GameInfo): Promise<Game> {
        const resp = await httpClient.post(
            "collections/games/records",
            gameInfo,
        );
        const data = await resp.json();
        return createGame(
            data["id"],
            data["title"],
            data["description"],
        );
    }

    async modifyGame(id: GameID, gameInfo: GameInfo): Promise<Game> {
        const resp = await httpClient.patch(
            `collections/games/records/${id}`,
            gameInfo,
        );
        const data = await resp.json();
        return createGame(
            data["id"],
            data["title"],
            data["description"],
        );
    }

    async removeGame(id: GameID): Promise<void> {
        const resp = await httpClient.delete(
            `collections/games/records/${id}`,
        );
    }
}