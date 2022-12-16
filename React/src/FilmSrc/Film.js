import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddModalFilm } from './AddModalFilm';
import { EditModalFilm } from './EditModalFilm';


var api = "https://localhost:5001/api/";
export class Film extends Component{
    constructor(props) {
        super(props);
        this.state = { films: [] , addModalShow: false, editModalShow: false  }
    }
    refreshList() {
        fetch(api + "Films")
            .then(response => response.json())
            // .then(data=>console.log(data))
            .then(data => {
                this.setState({ films: data });
            });

    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteFilm(id){
        if(window.confirm('Are you sure?')){
            fetch(api + "Films/"+id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render() {
        const { films,id,name,path,genre } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (

            <div className="mt-5 d-flex justify-content-left">
                <div className="container">
                    <div className="row">
                        <Table className="mt-4" striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Path</th>
                                    <th>Genre</th>
                                    <th>Options</th>
                                  
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {films.map(film =>
                                    <tr key={film.Id}>
                                        <td>{film.Id}</td>
                                        <td>{film.Name}</td>
                                        <td>{film.Path}</td>
                                        <td>{film.Genre}</td>
                                        
                                        <td><ButtonToolbar>
                                            <Button className="mr-2" variant="info"
                                                onClick={() => this.setState({
                                                    editModalShow: true,
                                                    id:film.Id,name:film.Name,path:film.Path,genre:film.Genre
                                                })}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                               onClick={() => this.deleteFilm(film.Id)}>
                                                Delete
                                            </Button>

                                            <EditModalFilm show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                id={id}
                                                name={name}
                                                path={path}
                                                genre={genre}

                                              />
                                        </ButtonToolbar></td>
                                    
                                    </tr>)}
                            </tbody>

                        </Table>
                    </div>
                    <div className="row">
                        <ButtonToolbar>
                            <Button variant='primary'
                                onClick={() => this.setState({ addModalShow: true })}>
                                Add film</Button>

                            <AddModalFilm show={this.state.addModalShow}
                                onHide={addModalClose} />
                        </ButtonToolbar>
                    </div>
                    
                </div>




            </div>
        )
    }
}