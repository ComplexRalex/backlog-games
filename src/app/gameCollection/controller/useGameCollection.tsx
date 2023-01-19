import { useContext } from "react";
import { GameCollectionContext } from "./gameCollectionController";

export function useGameCollection() {
    return useContext(GameCollectionContext);
}