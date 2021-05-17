import React from "react"
// eslint-disable-next-line no-unused-vars
import album from "./components/album"
import albums from "./components/albums"
import './index.css'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      Albums:
      [
        {
        id:1,
        artist:"sid sriram",
        albumTitle:"Inkem Inkem Inkem Kaavaale",
        albumCover:"https://m.media-amazon.com/images/I/91CG4tabxlL._SS500_.jpg",
    },
    {
        id:2,
        artist:"sid sriram",
        albumTitle:"Adiye",
        albumCover:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Sid_Sriram.jpg",
    },
    {
        id:3,
        artist:"Armaan Malik",
        albumTitle:"M.S.Dhoni",
        albumCover:"https://i2.cinestaan.com/image-bank/1500-1500/172001-173000/172219.jpg",
    },
    {
        id:4,
        artist:"Arijit Singh",
        albumTitle:"Shayad",
        albumCover:"https://i0.wp.com/www.newsgram.com/wp-content/uploads/2018/02/arijit-singh.jpg",
    },
    
    ],
  }
}
render(){
  return (
    <div className="App">
      <div class="container">
        <h1>Albums</h1>
        <albums Albums={this.state.Albums}/>
      </div>
    </div>
  );
}
}

export default App;
