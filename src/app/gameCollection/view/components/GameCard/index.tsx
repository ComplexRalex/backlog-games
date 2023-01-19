import { Button, Card } from 'react-bootstrap'
import { GameInfo } from '../../../domain/game'
import styles from './styles.module.css';

export interface GameCardProps {
    gameInfo: GameInfo;
    onClickModify(): Promise<any>;
    onClickRemove(): Promise<any>;
}

const GameCard = (props: GameCardProps): JSX.Element => {
    return (
        <div className='col'>
            <Card className={styles.card}>
                <Card.Body>
                    <Card.Title>{props.gameInfo.title}</Card.Title>
                    <Card.Text>{props.gameInfo.description}</Card.Text>
                </Card.Body>
                <Card.Footer className={styles.buttons}>
                    <Button className='btn btn-secondary' onClick={props.onClickModify}><i className="bi bi-pencil"></i> Modify</Button>
                    <Button className='btn btn-danger' onClick={props.onClickRemove}><i className="bi bi-trash"></i> Remove</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default GameCard