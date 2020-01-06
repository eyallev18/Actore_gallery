import React, { Component } from "react"
import data from "./actorsData.json"
import Actor from './Actor'

import { Container, Row, Col } from 'react-bootstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        const actorCards = data.map(actor =>


            <Col md={4} >
                <Actor actor={actor}></Actor>
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