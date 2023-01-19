import { useState } from "react";
import { useFormik } from "formik";
import { gameSchema } from "../../../schemas/gameSchema";
import { GameFormProps } from "./GameFormProps";

export const useGameForm = (props: GameFormProps) => {
    const [submitted, setSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: {
            title: props.gameInfo?.title || "",
            description: props.gameInfo?.description || "",
        },
        validationSchema: gameSchema,
        onSubmit: async (values) => {
            try {
                setSubmitted(true);
                await props.onSubmit({
                    title: values.title.trim(),
                    description: values.description.trim(),
                });
            } catch (error) {
                console.log(error);
                console.log("wtf");
            } finally {
                setSubmitted(false);
            }
        }
    });

    return {
        props,
        submitted,
        formik,
    }
}