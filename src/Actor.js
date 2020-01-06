import React, { Component } from "react"
import {Card} from 'react-bootstrap'

export default class Actor extends Component{
    constructor(props) {
        super (props);
    }
    render(){
        return(<div>
            <Card>
                    <Card.Img  src={this.props.actor.Image} />
                    <Card.Body>
                     {/*  <Card.Title>{ this.props.actor.FirstName} {this.props.actor.LastName}</Card.Title> */}
                    </Card.Body>
                </Card>
        </div>)
    }
}