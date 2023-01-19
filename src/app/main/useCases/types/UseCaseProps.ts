import { PresenterProps } from "./PresenterProps";

export type UseCaseProps<DataType, RepoType> = {
    data: DataType,
    repo: RepoType,
    presenter: PresenterProps<DataType>,
}