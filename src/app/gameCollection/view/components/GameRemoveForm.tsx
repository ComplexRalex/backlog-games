import React, { useState } from 'react'

import { GameInfo } from '../../domain/game';

import { Button, Modal } from 'react-bootstrap'

export interface GameRemoveFormProps {
    show: boolean;
    gameInfo: GameInfo;
    onAccept(): Promise<any>;
    onHide?: (() => void);
}

const GameRemoveForm = (props: GameRemoveFormProps): JSX.Element => {
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

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Remove game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Do you really want to remove "<i>{props.gameInfo.title}</i>"?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className='btn btn-danger'
                    onClick={handleAccept}
                    disabled={accepted}>
                    Accept
                </Button>
                <Button
                    className='btn btn-secondary'
                    onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default GameRemoveForm
