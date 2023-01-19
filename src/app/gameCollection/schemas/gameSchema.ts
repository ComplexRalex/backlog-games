import * as Yup from 'yup';

export const gameSchema = Yup.object().shape({
    title: Yup.string().trim()
        .max(255, "The title can't exceed 255 characters.")
        .required("The title of the name is required."),
    description: Yup.string().trim()
        .max(255, "The description can't exceed 255 characters."),
});