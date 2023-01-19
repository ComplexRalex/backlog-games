import styles from "../styles/GameGrid.module.css";

export interface GameGridProps {
    children?: React.ReactNode;
}

const GameGrid = (props: GameGridProps): JSX.Element => {
    return (
        <div className={`${styles.rgap} row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4`}>
            {props.children}
        </div>
    )
}

export default GameGrid