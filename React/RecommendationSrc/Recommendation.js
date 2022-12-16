import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import { json } from 'react-router-dom';
import { AddModalRecommendation } from './AddModalRecommendation';
import { EditModalRecommendation } from './EditModalRecommendation';


var api = "https://localhost:5001/api/";
export class Recommendation extends Component{
    constructor(props) {
        super(props);
        this.state = { recommendations: [] , addModalShow: false, editModalShow: false,filmname:json }
    }
    refreshList() {
        fetch(api + "Recommendations")
            .then(response => response.json())
            // .then(data=>console.log(data))
            .then(data => {
                this.setState({ recommendations: data });
            });
           this.getFilmName(1);
        //  console.log(JSON.parse(this.state.filmname[0]).Name);
     /* console.log(this.state.filmname.find(a=>{
       return  a.Id==="1";
      }));*/
       
      

    }
      async getFilmName(id ){
      let name;
         fetch(api + "Films/"+id)
            .then(response => response.json(),)
            // .then(data=>console.log(data))
            .then(data => {
                //name=data.Name;
               this.state.filmname=data.Name;
               console.log(data.Name);
               return data.Name;
            });
            
           // var myObject = JSON.parse(this.state.filmname);
           // console.log(myObject);
           return this.state.filmname ;
            //console.log(this.filmname);
            
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteRecommendation(id){
        if(window.confirm('Are you sure?')){
            fetch(api + "Recommendations/"+id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render() {
        const { recommendations,id,idFilm,description,filmname} = this.state;
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
                                    <th>Film id</th>
                                    <th>Description</th>
                                    <th>Options</th>
                                  
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {recommendations.map(recommendation =>
                                    <tr key={recommendation.Id}>
                                        <td>{recommendation.Id}</td>
                                        <td>{ recommendation.IdFilm}</td>
                                        <td>{ recommendation.Description}</td>
                                        <td><ButtonToolbar>
                                            <Button className="mr-2" variant="info"
                                                onClick={() => this.setState({
                                                    editModalShow: true,
                                                    id:recommendation.Id,idFilm:recommendation.IdFilm,description:recommendation.Description
                                                })}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                               onClick={() => this.deleteRecommendation(recommendation.Id)}>
                                                Delete
                                            </Button>

                                            <EditModalRecommendation show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                id={id}
                                                idFilm={idFilm}
                                                description={description}
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
                                Add Recommendation</Button>

                            <AddModalRecommendation show={this.state.addModalShow}
                                onHide={addModalClose} />
                        </ButtonToolbar>
                    </div>
                    
                </div>




            </div>
        )
    }
}