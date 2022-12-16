import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


var api = "https://localhost:5001/api/Recommendations/";
export class EditModalRecommendation extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log( this.props.id, event.target.id.value);
        fetch(api+event.target.id.value, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                idFilm: event.target.idFilm.value,
                description: event.target.description.value,
            })
           
        })
           // .then(res => res.json())
            .then((result) => {
                alert('Updated');
            },
                (error) => {
                    console.log(error);

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
                            Edit Recommendation
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="id">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="id" required 
                                            disabled
                                            defaultValue={this.props.id}
                                            placeholder="id" />
                                    </Form.Group>
                                    <Form.Group controlId="idFilm">
                                        <Form.Label>Film id</Form.Label>
                                        <Form.Control type="text" name="idFilm" required
                                            defaultValue={this.props.idFilm}
                                            placeholder="idFilm" />
                                    </Form.Group>
                                    <Form.Group controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" name="description" required
                                            defaultValue={this.props.description}
                                            placeholder="description" />
                                    </Form.Group>
                                   

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Recommendation
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