import React, { useState } from 'react'

import { GameInfo } from '../../domain/game';

import { useFormik } from 'formik';
import { gameSchema } from '../../schemas/gameSchema';

import { Button, Form, Modal } from 'react-bootstrap'

export interface GameFormProps {
    show: boolean;
    isModify: boolean;
    gameInfo?: GameInfo;
    onSubmit(gameInfo: GameInfo): Promise<any>;
    onHide?: (() => void);
}

const GameForm = (props: GameFormProps): JSX.Element => {
    const [submitted, setSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: {
            title: props.gameInfo?.title || "",
            description: props.gameInfo?.description || "",
        },
        validationSchema: gameSchema,
        onSubmit: async (values) => {
            try {
                setSubmitted(true);
                await props.onSubmit({
                    title: values.title.trim(),
                    description: values.description.trim(),
                });
            } catch (error) {
                console.log("wtf");
            } finally {
                setSubmitted(false);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Modal show={props.show} onHide={props.onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{`${!props.isModify ? "Add" : "Modify"} game`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter game title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        <Form.Text className='text-muted'>{
                            formik.errors.title
                                ? <span className='text-danger'>{formik.errors.title}</span>
                                : 'For example, "Hyperbolica".'
                        }</Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter game description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        <Form.Text className='text-muted'>{
                            formik.errors.description
                                ? <span className='text-danger'>{formik.errors.description}</span>
                                : 'For example, "It\'s about solving puzzles on non-euclidian spaces."'
                        }</Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={formik.submitForm}
                        className='btn btn-primary'
                        disabled={submitted || !formik.isValid}>
                        Accept
                    </Button>
                    <Button
                        className='btn btn-secondary'
                        onClick={props.onHide}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    )
}

export default GameForm