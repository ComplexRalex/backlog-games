import { v4 as uuidv4 } from 'uuid';
import { GameInfo, Game, createGame, GameID } from "../domain/game";
import { GameCollection } from "../domain/gameCollection";
import { GameCollectionRepo } from "../domain/gameCollectionRepo";

const LS_ITEM = "backlog-games-list";

function getLocalStorage(): Array<any> {
    const content = localStorage.getItem(LS_ITEM);
    return JSON.parse(content ?? "[]");
}

function setLocalStorage(content: Array<any>): void {
    const json = JSON.stringify(content);
    localStorage.setItem(LS_ITEM, json);
}

export class GameCollectionLS implements GameCollectionRepo {
    async load(): Promise<GameCollection> {
        const data = getLocalStorage();
        return {
            games: data.map((game: any) => createGame(
                game["id"], game["title"], game["description"],
            )),
        };
    }

    async createGame(gameInfo: GameInfo): Promise<Game> {
        const data = getLocalStorage();
        const newGame = createGame(
            uuidv4(),
            gameInfo["title"],
            gameInfo["description"],
        );
        const newData = [newGame, ...data];
        setLocalStorage(newData);
        return newGame;
    }

    async modifyGame(id: GameID, gameInfo: GameInfo): Promise<Game> {
        const data = getLocalStorage();
        const newGame = createGame(
            id,
            gameInfo["title"],
            gameInfo["description"],
        );
        const newData = [
            newGame,
            ...data.filter(g => g["id"] !== id),
        ];
        setLocalStorage(newData);
        return newGame;
    }

    async removeGame(id: GameID): Promise<void> {
        const data = getLocalStorage();
        const newData = [
            ...data.filter(g => g["id"] !== id),
        ];
        setLocalStorage(newData);
    }
}