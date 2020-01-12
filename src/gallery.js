import React, { Component } from "react";
import data from "./actorsData.json";
import Actor from "./Actor";
import SearchBox from "./components/SearchBox";

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Badge,
  Button,
  Dropdown
} from "react-bootstrap";

class Gallery extends Component {
  constructor(props, e) {
    super(props);
    this.state = {
      /*actorSearchResults: [],*/
      actorSearchResultStrings: "",
      selectedEventKey: null,
      value: ""
      /*actors: [] */
    };

    this.searchActors = this.searchActors.bind(this);
    this.sortSelected = this.sortSelected.bind(this);
  }

  searchActors = e => {
    this.setState({
      actorSearchResultStrings: e.target.value
    });
  };

  sortSelected(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const { actorSearchResultStrings } = this.state;
    const { value } = this.state;
    let sortOptions = ["FirstName", "LastName", "Age"];

    // filter
    if (value === "FirstName" || value === "LastName") {
      data.sort(function(a, b) {
        var x = a[value].toLowerCase();
        var y = b[value].toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
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
            filteredActors.push(data[i]);
          }
        } else {
          let lowsearchFirst = res[0].toLowerCase();
          let lowsearchLast = res[1].toLowerCase();
          if (
            lowFirst === lowsearchFirst &&
            lowLast.startsWith(lowsearchLast)
          ) {
            filteredActors.push(data[i]);
          }
        }
      }
    } /*else if (value === "Age"){
      for (let i=0;i<filteredActors.length;i++){
        for (let j=0;j<i;j++){
          if (this.actor.actorAge()
        }
      }


    }*/
    /* if (value === "") {
      var unSortedArray = [];
      for (let i = 0; i < filteredActors.length; i++) {
        unSortedArray.push(filteredActors[i]);
      }
    } */
    /*if (value === "" || value === "unSorted") {
    } else  */ /*else if (value === "notSorted") {
      filteredActors = [];
      for (let i = 0; i < unSortedArray.length; i++) {
        filteredActors.push(unSortedArray[i]);
      }
    } */
    const actorCards = filteredActors.map((actor, index) => (
      <Col md={4} key={index}>
        <Actor actor={actor} />
      </Col>
    ));

    return (
      <div>
        <Container>
          {/*  <SearchBox searchPlaceholder="Search Actor" results={actorSearchResultStrings}
                        onSearchChange={this.searchActors}  /> */}
          <h1>
            <Badge variant="secondary">Actors From IMDB</Badge>
          </h1>
          <select value={value} onChange={this.sortSelected}>
            <option value="unSorted">unSorted</option>
            <option value="FirstName">Sorted By FirstName</option>
            <option value="LastName">Sorted By LastName</option>
            <option value="Age">Sorted By Age</option>
          </select>
          {/* <Button variant="success" OnClick={this.sortActors}>
            Sort
                    </Button> */}
          <Form.Control
            className="searchAct"
            type="text"
            placeholder="type First Name and/or Last Name to filter "
            value={actorSearchResultStrings}
            onChange={this.searchActors}
          />
          <Row>{actorCards}</Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
