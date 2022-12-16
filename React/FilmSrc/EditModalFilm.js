import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


var api = "https://localhost:5001/api/Films/";
export class EditModalFilm extends Component {
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
                name: event.target.name.value,
                path:event.target.path.value,
                genre:event.target.genre.value,
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
                            Edit Film
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
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" required
                                            defaultValue={this.props.name}
                                            placeholder="name" />
                                    </Form.Group>
                                    <Form.Group controlId="path">
                                        <Form.Label>Path</Form.Label>
                                        <Form.Control type="text" name="path" required
                                            defaultValue={this.props.path}
                                            placeholder="path" />
                                    </Form.Group>
                                    <Form.Group controlId="genre">
                                        <Form.Label>Genre</Form.Label>
                                        <Form.Control type="text" name="genre" required
                                            defaultValue={this.props.genre}
                                            placeholder="genre" />
                                    </Form.Group>
                                   

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Film
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