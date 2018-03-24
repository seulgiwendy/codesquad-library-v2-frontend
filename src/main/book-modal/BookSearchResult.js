import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class BookSearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: true
        }
        this.onModalHide = this.onModalHide.bind(this);
    }


    onModalHide() {
        this.setState({
            modalShow: false
        });
        this.props.onClose();
    }

    render() {
        return(
            <Modal show={this.state.modalShow} onHide={this.onModalHide}>
                <Modal.Header>
                    <Modal.Title>검색된 책</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <h4 className="text-center">{this.props.book.title}</h4>
                
                    </Modal.Body>
            </Modal>
        )
    }
}

export default BookSearchResult;