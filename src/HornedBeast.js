import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'



class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedFavorite: false,
      Count: 0
    }
  }


  handleFavorite = () => {
    this.setState({
      clickedFavorite: true,
      Count: this.state.Count + 1
    
    })
    this.props.handleShowModal(this.props.title, this.props.image_url, this.props.description)
  }
  

  render() {
    return (
      <div className="Beast" key={this.props.index}>

        <Card style={{ width: '18rem', height: 'fit-content'}}>
          <Card.Title as="h2" >{this.props.title}</Card.Title>
          
          <img src={this.props.image_url} alt={this.props.description} onClick={this.handleFavorite}/>

          <Card.Title as="h3" >Info:</Card.Title>
          <Card.Text>Number of favorites {this.state.Count + "❤️"}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
          <ListGroup>
          <ListGroup.Item>Keyword: {this.props.keyword}</ListGroup.Item>
          <ListGroup.Item> Number of horns: {this.props.horns}</ListGroup.Item>
          </ListGroup>
        </Card>
        
        </div>
    )
  }
}

export default HornedBeast;

