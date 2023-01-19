import { NextPage } from "next"
import { useEffect, useState } from "react";

import { Game, GameInfo } from "../src/app/gameCollection/domain/game";
import { useGameCollection } from "../src/app/gameCollection/controller/useGameCollection";

import Head from "next/head";
import Link from "next/link";
import { Button } from 'react-bootstrap'
import GameCard from "../src/app/gameCollection/view/components/GameCard";
import GameGrid from "../src/app/gameCollection/view/components/GameGrid";
import GameForm, { GameFormProps } from "../src/app/gameCollection/view/components/GameForm";
import GameRemoveForm, { GameRemoveFormProps } from "../src/app/gameCollection/view/components/GameRemoveForm";
import ErrorModal from "../src/app/main/view/components/ErrorModal";
import GameCardPlaceholder from "../src/app/gameCollection/view/components/GameCardPlaceholder";

import styles from "../styles/Collection.module.css";

type FormProps = Omit<GameFormProps, "onHide">
type RemoveFormProps = Omit<GameRemoveFormProps, "onHide">

const Collection: NextPage = () => {
    const {
        state,
        error,
        isFirstLoading,
        isLoading,
        loadCollection,
        addGame,
        modifyGame,
        removeGame,
    } = useGameCollection();
    const [formProps, setFormProps] = useState<FormProps>({
        show: false,
        isModify: false,
        gameInfo: undefined,
        onSubmit: async (gameInfo: GameInfo) => { },
    });
    const [removeFormProps, setRemoveFormProps] = useState<RemoveFormProps>({
        show: false,
        gameInfo: { title: "", description: "" },
        onAccept: async () => { },
    });
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        loadCollection();
    }, []);

    useEffect(() => {
        if (error) setShowError(true);
    }, [error]);

    const onCloseError = () => setShowError(false);

    const onClose = () => setFormProps({
        show: false,
        isModify: false,
        gameInfo: undefined,
        onSubmit: async (_) => { },
    });

    const onCloseRemove = () => setRemoveFormProps({
        show: false,
        gameInfo: { title: "", description: "" },
        onAccept: async () => { },
    });

    const onClickAdd = () => {
        setFormProps({
            show: true,
            isModify: false,
            onSubmit: async (gameInfo) => {
                await addGame(gameInfo);
                onClose();
            },
        });
    }

    const onClickModify = (game: Game) => {
        setFormProps({
            show: true,
            isModify: true,
            gameInfo: game as GameInfo,
            onSubmit: async (gameInfo) => {
                await modifyGame({
                    id: game.id,
                    ...gameInfo,
                });
                onClose();
            },
        });
    }

    const onClickRemove = (game: Game) => {
        setRemoveFormProps({
            show: true,
            gameInfo: game as GameInfo,
            onAccept: async () => {
                await removeGame({
                    id: game.id,
                });
                onCloseRemove();
            },
        });
    }

    return (
        <div className="container mt-4">
            <Head>
                <title>Backlog Games - Collection</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="d-flex justify-content-between mb-4">
                <Link href="/">
                    <h1 className={styles.title}>Backlog Games</h1>
                </Link>
                <Button className="ms-4" onClick={onClickAdd}>
                    <i className="bi bi-plus-lg"></i>
                    &nbsp;
                    Add game
                </Button>
            </div>
            {
                isFirstLoading
                    ? <GameGrid>
                        <GameCardPlaceholder />
                        <GameCardPlaceholder />
                        <GameCardPlaceholder />
                        <GameCardPlaceholder />
                    </GameGrid>
                    : state.collection.games.length > 0
                        ? <GameGrid>
                            {state.collection.games.map(game => (
                                <GameCard
                                    key={game.id}
                                    gameInfo={game as GameInfo}
                                    onClickModify={async () => onClickModify(game)}
                                    onClickRemove={async () => onClickRemove(game)}
                                />
                            ))}
                        </GameGrid>
                        : <p>There are no games here!</p>
            }

            {
                formProps.show &&
                <GameForm
                    show={formProps.show}
                    isModify={formProps.isModify}
                    gameInfo={formProps.gameInfo}
                    onSubmit={formProps.onSubmit}
                    onHide={onClose}
                />
            }

            {
                removeFormProps.show &&
                <GameRemoveForm
                    show={removeFormProps.show}
                    gameInfo={removeFormProps.gameInfo}
                    onAccept={removeFormProps.onAccept}
                    onHide={onCloseRemove}
                />
            }

            <ErrorModal
                show={showError}
                error={error}
                onHide={onCloseError}
            />

        </div>
    )
}

export default Collection;