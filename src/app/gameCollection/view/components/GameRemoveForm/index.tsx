import { Button, Modal } from 'react-bootstrap'
import { GameRemoveFormProps } from './GameFormRemoveProps';
import { useGameFormRemove } from './useGameFormRemove';

const GameRemoveForm = (props: GameRemoveFormProps): JSX.Element => {
    const {
        accepted,
        handleAccept,
    } = useGameFormRemove(props);

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Remove game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Do you really want to remove &quot;<i>{props.gameInfo.title}</i>&quot;?
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
