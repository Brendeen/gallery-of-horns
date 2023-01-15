import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal className="modal" show={this.props.showModal} onHide={this.props.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>You favorited {this.props.modalTitle}!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img className="modalImg" src={this.props.modalImage} alt={this.props.modalDes}/>
            <p>{this.props.modalDes}</p>
          </Modal.Body>

        </Modal>
      </>
    )
  }
}

export default SelectedBeast;