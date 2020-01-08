import React, { Component } from "react"
import data from "./actorsData.json"
import Actor from './Actor'
import SearchBox from './components/SearchBox'

import { Container, Row, Col, InputGroup, FormControl, Form,Badge } from 'react-bootstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actorSearchResults: [],
            actorSearchResultStrings: "",
            actors: []
        }

        this.searchActors = this.searchActors.bind(this);
    }
    searchActors = (e) => {

        var selectedActors = []





        this.setState({

            actorSearchResultStrings: e.target.value

        })


    }

    render() {

        const { actorSearchResultStrings } = this.state;


        // filter

        let filteredActors = [];
        if (actorSearchResultStrings === "") {
            filteredActors = data;
        } else {
            var res = actorSearchResultStrings.split(" ");

            for (var i = 0; i < data.length; i++) {
                let lowFirst = data[i].FirstName.toLowerCase();

                let lowLast = data[i].LastName.toLowerCase();
                if (res.length === 1) {
                    let lowsearch = res[0].toLowerCase();
                    if (lowFirst.startsWith(lowsearch) || lowLast.startsWith(lowsearch)) {
                        filteredActors.push(data[i])
                    }
                } else {
                    let lowsearchFirst = res[0].toLowerCase();
                    let lowsearchLast = res[1].toLowerCase();
                    if (lowFirst === (lowsearchFirst) && lowLast.startsWith(lowsearchLast)) {
                        filteredActors.push(data[i])
                    }

                }
            }
        }


        const actorCards = filteredActors.map((actor, index) =>


            <Col md={4} key={index}>
                <Actor actor={actor} />
            </Col>


        )




        return (
            <div>

                <Container>
                    {/*  <SearchBox searchPlaceholder="Search Actor" results={actorSearchResultStrings}
                        onSearchChange={this.searchActors}  /> */}
                    <h1>
                         <Badge variant="secondary">Actors From IMDB</Badge>
                    </h1>
                    <Form.Control className="searchAct" type="text" placeholder="type First Name and/or Last Name to filter " value={actorSearchResultStrings}
                        onChange={this.searchActors} />
                    <Row>
                        {actorCards}
                    </Row>
                </Container>


            </div>

        )
    }
}

export default Gallery;