import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json"
import SelectedBeast from "./SelectedBeast";
import Form from 'react-bootstrap/Form';

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalTitle: "",
      modalImage: "",
      modalDes: "",
      hornData: data
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

  updateHornData = (e) =>{
    e.preventDefault();
    const hornSelector = e.target.value;
    let updatedData;

    if(hornSelector === ""){
      updatedData = data;

    } else if(hornSelector === "1"){
      updatedData = data.filter(numOfHorns => numOfHorns.horns === 1);
      console.log(updatedData)
      this.setState()

    } else if(hornSelector === "2"){
      updatedData = data.filter(numOfHorns => numOfHorns.horns === 2);
      console.log(updatedData)

    } else if(hornSelector === "3"){
      updatedData = data.filter(numOfHorns => numOfHorns.horns === 3);
      console.log(updatedData)

    } else if(hornSelector === "100"){
      updatedData = data.filter(numOfHorns => numOfHorns.horns === 100);
      console.log(updatedData)

    } 
    this.setState({
      hornData: updatedData
    })
  }



  render() {
    return (
      <>
        <Header />

        <Form>
          <Form.Group>
            <Form.Select onChange={this.updateHornData}>
              <option value={""}>All horned beasts</option>
              <option value={"1"}>1 horn</option>
              <option value={"2"}>2 horns</option>
              <option value={"3"}>3 horns</option>
              <option value={"100"}>100 horns?!</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main hornData={this.state.hornData} handleShowModal={this.handleShowModal} />
        <SelectedBeast showModal={this.state.showModal} handleClose={this.handleClose} modalTitle={this.state.modalTitle} modalImage={this.state.modalImage} modalDes={this.state.modalDes}/>
        <Footer />
      </>
    )
  }
}

export default App