import React, { Component } from "react"
import data from "./actorsData.json"
import Actor from './Actor'
import SearchBox from './components/SearchBox'

import { Container, Row, Col ,InputGroup ,FormControl, Form} from 'react-bootstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actorSearchResults: [],
            actorSearchResultStrings: [],
            actors: []
        }

        this.searchActors = this.searchActors.bind(this);
    }  
        searchActors =(e) => {

            
           
                this.setState({
                    
                    actorSearchResultStrings: e.target.value
                })
            
    
        }
   
    render() {
        
        const { actorSearchResultStrings } = this.state;

        const actorCards = data.map((actor,index) =>

          
            <Col md={4} key={index}>
                <Actor actor={actor}/>
            </Col>
         
        )

            


        return (
            <div>
                <Container>
              {/*  <SearchBox searchPlaceholder="Search Actor" results={actorSearchResultStrings}
                        onSearchChange={this.searchActors}  /> */}
                <Form.Control type="text" placeholder="Search Actor" value={actorSearchResultStrings} 
                onChange={this.searchActors}/>
                    <Row>
                        {actorCards}
                    </Row>
                </Container>


            </div>

        )
    }
}

export default Gallery;