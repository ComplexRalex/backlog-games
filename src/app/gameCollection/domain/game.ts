export type GameID = string;

export type Game = {
    id: string;
    title: string;
    description?: string;
}

export type GameInfo = Omit<Game, "id">

export function createGame(
    id: string,
    title: string,
    description?: string
): Game {
    return { id, title, description };
}

export function changeGameInfo(
    gameId: GameID,
    title: string,
    description?: string,
): Game {
    return { id: gameId, title, description };
}
