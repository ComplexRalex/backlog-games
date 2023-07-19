import { GameInfo, Game, createGame, GameID } from "../domain/game";
import { GameCollection } from "../domain/gameCollection";
import { GameCollectionRepo } from "../domain/gameCollectionRepo";
import HttpClient from "../../main/request/httpClient";

const REST_API = process.env.NEXT_PUBLIC_PB_REST_API;

const httpClientPB = new HttpClient(REST_API!);

export class GameCollectionPB implements GameCollectionRepo {
    async load(): Promise<GameCollection> {
        const resp = await httpClientPB.get(
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
        const resp = await httpClientPB.post(
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
        const resp = await httpClientPB.patch(
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
        const resp = await httpClientPB.delete(
            `collections/games/records/${id}`,
        );
    }
}