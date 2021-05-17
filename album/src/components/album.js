import React, {Component} from "react";
import '../index.css'
export class album extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
render(){
    return(
        <div class="album">
            <h1>Albums</h1>
            <img src={this.props.albumCover} alt="albcov"/>
            <h3>{this.props.albumTitle}</h3>
            <h3>{this.props.artist}</h3>

        </div>
    )
}
}

export default album;