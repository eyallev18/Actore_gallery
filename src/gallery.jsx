import React,{Component} from "react"
import data from "./actorsData.json"

class Gallery extends Component{
    render(){
        return(
        <div>{data[0].FirstName}</div>
        );
    }
}

export default Gallery;