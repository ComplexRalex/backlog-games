export type PresenterProps<T> = {
    present(data: T): void;
}