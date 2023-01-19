import { UseCaseProps } from "../../../main/useCases/types/UseCaseProps";
import { GameCollection } from "../../domain/gameCollection";
import { GameCollectionRepo } from "../../domain/gameCollectionRepo";

export type GameCollectionUseCase = UseCaseProps<GameCollection, GameCollectionRepo>;