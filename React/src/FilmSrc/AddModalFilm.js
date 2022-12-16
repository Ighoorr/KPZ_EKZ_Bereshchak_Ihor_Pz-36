import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

var api="https://localhost:5001/api/";
export class AddModalFilm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(api + 'Films', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: null,
                name: event.target.name.value,
                path:event.target.path.value,
                genre:event.target.genre.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert('Added successfully');
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Film
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" required
                                            placeholder="name" />
                                    </Form.Group>
                                    <Form.Group controlId="path">
                                        <Form.Label>Path</Form.Label>
                                        <Form.Control type="text" name="path" required
                                            placeholder="path" />
                                    </Form.Group>
                                    <Form.Group controlId="genre">
                                        <Form.Label>Genre</Form.Label>
                                        <Form.Control type="text" name="genre" required
                                            placeholder="genre" />
                                    </Form.Group>
                                    

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Film
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}