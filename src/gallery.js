import React, { Component } from "react"
import data from "./actorsData.json"
import Actor from './Actor'

import { Container, Row, Col ,InputGroup ,FormControl} from 'react-bootstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        
       

        const actorCards = data.map((actor,index) =>


            <Col md={4} key={index}>
                <Actor actor={actor}/>
            </Col>
        )




        return (
            <div>
                <Container>
                    <Row>
                        {actorCards}
                    </Row>
                </Container>


            </div>

        );
    }
}

export default Gallery;