import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import "./App.css"

class Main extends React.Component {
  render() {
    return (
      <main>
       {data.map((hornedBeast, index) => <HornedBeast 
       title={hornedBeast.title}
       image_url={hornedBeast.image_url} 
       description={hornedBeast.description} 
       keyword={hornedBeast.keyword}
       horns={hornedBeast.horns} 
       key={index}
       />
       )}
      </main>
    )
  }
}

export default Main;

