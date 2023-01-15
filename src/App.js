import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json"
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalTitle: "",
      modalImage: "",
      modalDes: ""
    }
  }

  handleShowModal = (title, imageUrl, description) => {
    this.setState({
      showModal: true,
      modalTitle: title,
      modalImage: imageUrl,
      modalDes: description
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }




  render() {
    return (
      <>
        <Header />
        <Main data={data} handleShowModal={this.handleShowModal} />
        <SelectedBeast showModal={this.state.showModal} handleClose={this.handleClose} modalTitle={this.state.modalTitle} modalImage={this.state.modalImage} modalDes={this.state.modalDes}/>
        <Footer />
      </>
    )
  }
}

export default App