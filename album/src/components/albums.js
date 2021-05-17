import React, {Component} from "react";
import '../index.css'
export class albums extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
render(){
    return(
        <div class="cards">
            {this.props.Albums.map(Album=>{
                return(
                    <>
            <img src={Album.albumCover} alt="albcov"/>
            <h3>{Album.albumTitle}</h3>
            <h3>{Album.artist}</h3>
            </>)
                })}
        </div>
    )
}
}

export default albums;