import { GameInfo } from "../../../domain/game";

export interface GameRemoveFormProps {
    show: boolean;
    gameInfo: GameInfo;
    onAccept(): Promise<any>;
    onHide?: (() => void);
}