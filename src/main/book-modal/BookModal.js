import React, { Component } from 'react';
import { Modal, FormGroup, InputGroup, FormControl } from "react-bootstrap";
import BookSearchResult from './BookSearchResult';
import * as modalCloseActions from '../../reducers/actions';
import { connect } from 'react-redux';

const initialState = {
    isSearched: false
}

class BookModal extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    
        this.bookModalOnSubmit = this.bookModalOnSubmit.bind(this);
        this.handleSearchedBook = this.handleSearchedBook.bind(this);
        this.bookModalOnSubmit = this.bookModalOnSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentWillUpdate() {
        console.log(this.state.isSearched);
    }

    componentDidUpdate() {
        console.log(this.state.isSearched);
        console.log(this.state.targetBook);
    }

    reset() {
        this.state = initialState;
    }

    bookModalOnSubmit(event) {
        let isbn = document.getElementById('isbn-form').value;
        this.setState({
            newBookIsbn: isbn
        }, () => this.searchBookIsbn())
    }

    handleSearchedBook() {
        console.log(this.state.targetBook);
        this.setState({
            isSearched: true
        })
    }

    searchBookIsbn() {
        if(this.state.newBookIsbn != 0) {

            let searchedBook;

            console.log(this.state);
            let address = `http://localhost:8080/api/v1/newbook/${this.state.newBookIsbn}`;
            console.log(address);

            let requestProps = {
                method: 'GET',
            }

            fetch(address, requestProps)
            .then(res => {
                console.log(res)
                return res.json();
            }).then(json => {
                if (json.items === undefined) {
                    window.alert('검색된 도서가 없습니다!');
                    return;
                }
                return json.items[0]
            }).then(item => {
                searchedBook = item;
                this.setState({
                    targetBook: searchedBook
                }, () => this.handleSearchedBook());
            }).catch(err => console.error(err));

        }
    }

    render() {
        if(this.state.isSearched) {
            let book = this.state.targetBook;

            this.reset();
            return(<BookSearchResult modalShow={true} book={book} onClose={this.props.onBookModalClose}/>) 
            
        }

        return(
            <Modal show={this.props.bookModalExpanded} onHide={this.props.onBookModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>장서 추가</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4 className="text-center">ISBN을 입력해주세요.</h4>
                        <FormGroup className="modal-body-isbnform center-block" controlId="isbn-form">
                            <InputGroup>
                                <FormControl type='text'/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" onClick={this.bookModalOnSubmit}>제출</button>
                                </span>
                            </InputGroup>
                        </FormGroup>
                    </Modal.Body>
                </Modal>
        )
    }
    
}

export default BookModal;