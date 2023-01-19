import { Game, GameID } from "./game";

export type GameCollection = {
    games: Game[];
}

export function createGameCollection(
    // ...
): GameCollection {
    return { games: [] };
}

export function addGameToCollection(
    gameCollection: GameCollection,
    game: Game,
): GameCollection {
    const cleanGameCollection = gameCollection.games
        .filter(g => g.id !== game.id);
    return {
        games: [
            game,
            ...cleanGameCollection,
        ],
    };
}

export function removeGameFromCollection(
    gameCollection: GameCollection,
    gameId: GameID,
): GameCollection {
    return {
        games: gameCollection.games
            .filter(g => g.id !== gameId),
    };
}
