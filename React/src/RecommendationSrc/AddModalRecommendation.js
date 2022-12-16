import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

var api="https://localhost:5001/api/";
export class AddModalRecommendation extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(api + 'Recommendations', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: null,
                idFilm: event.target.idFilm.value,
                description: event.target.description.value,
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
                            Add Recommendation
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="idFilm">
                                        <Form.Label>Film id</Form.Label>
                                        <Form.Control type="text" name="idFilm" required
                                            placeholder="idFilm" />
                                    </Form.Group>
                                    <Form.Group controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" name="description" required
                                            placeholder="description" />
                                    </Form.Group>
                                   

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Recommendation
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