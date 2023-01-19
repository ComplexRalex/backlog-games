import Head from "next/head"
import Link from "next/link"
import { Button } from "react-bootstrap"

import { GameInfo } from "../../../domain/game"
import ErrorModal from "../../../../main/view/components/ErrorModal"
import GameGrid from "../../components/GameGrid"
import GameCard from "../../components/GameCard"
import GameCardPlaceholder from "../../components/GameCardPlaceholder"
import GameForm from "../../components/GameForm"
import GameRemoveForm from "../../components/GameRemoveForm"

import { useCollectionPage } from "./useCollectionPage"

import styles from './styles.module.css'

const CollectionPage = () => {
    const {
        state,
        error,
        isFirstLoading,
        isLoading,

        formProps,
        removeFormProps,
        showError,

        onCloseError,
        onClose,
        onCloseRemove,
        onClickAdd,
        onClickModify,
        onClickRemove,
    } = useCollectionPage();

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

export default CollectionPage