import React,{Component} from "react"
import data from "./actorsData.json"

class Gallery extends Component{
    render(){
        return(
        <div>{data[1].FirstName}
        <img src={data[1].Image} alt="stam"/>

        </div>

        );
    }
}

export default Gallery;