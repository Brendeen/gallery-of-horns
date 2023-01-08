import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <div class="dog">
        <HornedBeast title={"Cat"} imgUrl={"https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__340.jpg"} alt={"Picture of a cat sitting like a human"}  description={"Small fuzzy animal"}/>
        <HornedBeast title={"Dog"} imgUrl={"https://www.stockvault.net/data/2007/03/01/102647/thumb16.jpg"} alt={"Picture of a dog sitting like a dog"} description={"Small fuzzy animal, but is a dog"} />
      </div>
    )
  }
}

export default Main;

