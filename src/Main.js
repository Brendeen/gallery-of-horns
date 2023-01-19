import React from "react";
import HornedBeast from "./HornedBeast";
import "./App.css"

class Main extends React.Component {
  render() {
    return (
      <main>
       {this.props.hornData.map((hornedBeast, index) => <HornedBeast 
       title={hornedBeast.title}
       image_url={hornedBeast.image_url} 
       description={hornedBeast.description} 
       keyword={hornedBeast.keyword}
       horns={hornedBeast.horns} 
       key={index}
       handleShowModal={this.props.handleShowModal}
       />
       )}
      </main>
    )
  }
}

export default Main;

