import { useState } from "react";
import { GameRemoveFormProps } from "./GameFormRemoveProps"

export const useGameFormRemove = (props: GameRemoveFormProps) => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = async () => {
        try {
            setAccepted(true);
            await props.onAccept();
        } catch (error) {
            console.log(error);
            console.log("wtf 2");
        } finally {
            setAccepted(false);
        }
    }

    return {
        props,
        accepted,
        handleAccept,
    }
}