import { GameInfo } from "../../../domain/game";

export interface GameFormProps {
    show: boolean;
    isModify: boolean;
    gameInfo?: GameInfo;
    onSubmit(gameInfo: GameInfo): Promise<any>;
    onHide?: (() => void);
}