import React, { Component } from 'react'
import { Form, ListGroup } from 'react-bootstrap';
import './SearchBox.css';



// Props
// searchPlaceholder. a string for the placeholder to show in the search input
// results. an array of results that the componenet will render
// onSearchChange. callback function to parent notifying that the search text has changed
// onSelectedResult. callback function to parent notifying on the selected result (index from the results prop)
// State
// searchText
export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
     /*   this.handleSelection = this.handleSelection.bind(this); */
    }

    handleInputChange(ev) {
        const newSearchText = ev.target.value

        this.setState({
            searchText: newSearchText
        });

        this.props.onSearchChange(newSearchText);
    }
/*
    handleSelection(ev) {
        this.props.onSelectedResult(parseInt(ev.target.getAttribute("data-index")));
        this.setState({
            searchText: ""
        })
    }
*/
    render() {
        const { searchPlaceholder, results } = this.props;
        const { searchText } = this.state;

 {/*      const listGroupItems = results.map((result, index) => <ListGroup.Item key={index} data-index={index} action onClick={this.handleSelection}>{result}</ListGroup.Item>); 
    */}    
        // let listGroupItems = [];
        // for (var i = 0; i < results.length; i++) {
        //     listGroupItems.push(<ListGroup.Item>{results[i]}</ListGroup.Item>)
        // }

        return (
            <div className="search-box">
                <Form.Control type="text" placeholder={searchPlaceholder} value={searchText} onChange={this.handleInputChange}/>
                <ListGroup className="search-results">
                    {/*{listGroupItems} */}
                </ListGroup>
            </div>
        )
    }
}
