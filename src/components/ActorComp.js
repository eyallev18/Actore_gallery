import React, { Component } from 'react'
import {  Card } from 'react-bootstrap';


// Props
// actor. an instance of ActorModel
export default class ActorComp extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { actor } = this.props;

        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={actor.imageURL} />
                    <Card.Body>
                        <Card.Title>{actor.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
