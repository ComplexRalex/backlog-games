import { Button, Card, Placeholder } from 'react-bootstrap'
import styles from '../styles/GameCard.module.css';

const GameCardPlaceholder = (): JSX.Element => {
    return (
        <div className='col'>
            <Card className={styles.card}>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
                <Card.Footer className={styles.buttons}>
                    <Placeholder.Button className='btn btn-secondary' xs={4} />
                    <Placeholder.Button className='btn btn-danger' xs={4} />
                </Card.Footer>
            </Card>
        </div>
    )
}

export default GameCardPlaceholder