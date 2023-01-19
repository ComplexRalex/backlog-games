import { GameCollection } from "../../../gameCollection/domain/gameCollection";
import { GameCollectionRepo } from "../../../gameCollection/domain/gameCollectionRepo";
import { PresenterProps } from "./PresenterProps";

export type UseCaseProps = {
    data: GameCollection,
    repo: GameCollectionRepo,
    presenter: PresenterProps,
}