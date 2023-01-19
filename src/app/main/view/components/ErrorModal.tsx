import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export interface ErrorModalProps {
    show: boolean;
    error: any;
    onHide?: (() => void);
}

const ErrorModal = (props: ErrorModalProps): JSX.Element => {
    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>An error occurred</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.error}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn btn-secondary' onClick={props.onHide}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal