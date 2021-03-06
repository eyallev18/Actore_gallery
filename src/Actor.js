import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ActorModel from "./ActorModel.js";

export default class Actor extends Component {
  constructor(props) {
    super(props);
    /*   this.actorAge = this.actorAge.bind(this); */
  }
  //     actorAge(){
  //         const currentYear = new Date().getFullYear();
  //         const yearOfBorn = Number(this.props.actor.Birthday.split("-")[0]);
  //         return(currentYear-yearOfBorn);
  // }

  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.props.actor.Image} />
          <Card.Body>
            <Card.Title>
              <a href={this.props.actor.IMDBLink} target="_blank">
                {" "}
                {this.props.actor.FirstName} {this.props.actor.LastName}{" "}
              </a>{" "}
            </Card.Title>
            <Card.Title> Age is: {this.props.actor.actorAge()}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
