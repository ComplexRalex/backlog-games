import { GameCollection } from "../../../gameCollection/domain/gameCollection";

export type PresenterProps = {
    present(data: GameCollection): void;
}