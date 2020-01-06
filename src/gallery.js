import React, { Component } from "react"
import data from "./actorsData.json"
import Actor from './Actor'
import SearchBox from './components/SearchBox'

import { Container, Row, Col ,InputGroup ,FormControl} from 'react-bootstrap';

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
        searchActors(searchText) {

            // let newActorSearchResults = [];
            // for (var i = 0; i < this.state.actorSearchResults.length; i++) {
            //     newActorSearchResults.push(this.state.actorSearchResults[i])
            // }
            // newActorSearchResults.push(searchText);
    
            // this.setState({
            //     actorSearchResults: newActorSearchResults
            // })
    
            if (searchText === "") {
                this.setState({
                    actorSearchResults: [],
                    actorSearchResultStrings: []
                })
            } /*else {
                const searchURL = "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + searchText;
                Axios.get(searchURL).then(response => {
                    this.setState({
                        actorSearchResults: response.data.results,
                        actorSearchResultStrings: response.data.results.map(result => result.name)
                    })
                });
    
                // this.setState({
                //     actorSearchResults: this.state.actorSearchResults.concat(searchText)
                // })
    
            } */
    
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
                <SearchBox searchPlaceholder="Search Actor" results={actorSearchResultStrings}
                        onSearchChange={this.searchActors}  />
                    <Row>
                        {actorCards}
                    </Row>
                </Container>


            </div>

        )
    }
}

export default Gallery;