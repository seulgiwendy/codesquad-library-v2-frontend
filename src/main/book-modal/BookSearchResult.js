import React, { Component } from 'react';
import { Modal, Image } from 'react-bootstrap';
import './bookmodal.css';
import BookSearchResultTable from './BookSearchResultTable';

var locations, categories;

fetch('http://library-api.wheejuni.com/api/info/categories').then(res => res.json()).then(json => categories = json);
fetch('http://library-api.wheejuni.com/api/info/locations').then(res => res.json()).then(json => locations = json)

const NewBook = function(booktitle, author, description, isbn, category, location) {
    if(!this instanceof NewBook) {
        return new NewBook(booktitle, author, description, isbn, category, location);
    }

    this.booktitle = booktitle;
    this.author = author;
    this.description = description;
    this.isbn = isbn;
    this.category = category;
    this.location = location;
}

NewBook.prototype.toString = function() {
    return `${this.booktitle}, author: ${this.author}, ISBN: ${this.isbn}`;
}

class BookSearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: true,
            selectedCategory: '선택하세요...',
            selectedLocation: '선택하세요...'
        }
        this.onModalHide = this.onModalHide.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.onLocationSelect = this.onLocationSelect.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    componentDidMount() {
        console.log(this.props.book);
    }

    onCategorySelect(category) {
        console.log(category);
        this.setState({
            selectedCategory: category
        });
    }

    onLocationSelect(location) {
        console.log(location);
        this.setState({
            selectedLocation: location
        });
    }


    onModalHide() {
        this.setState({
            modalShow: false
        });
        this.props.onClose();
    }

    onSubmitClick() {
        var book = new NewBook(this.props.book.title, this.props.book.author, this.props.book.description, this.props.book.isbn, 
        this.state.selectedCategory, this.state.selectedLocation);

        console.log(book);

        fetch('http://library-api.wheejuni.com/api/v1/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book),
            
        }).then(res => {
            window.alert(`도서 정보가 저장되었습니다.`)
            this.onModalHide()}).catch(err => console.error(err));

    }

    render() {
        return(
            <Modal show={this.state.modalShow} onHide={this.onModalHide}>
                <Modal.Header>
                    <Modal.Title>검색된 책</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid book-result modal-result">
                        <h4 className="text-center">{this.props.book.title}</h4> 
                            <div className="container-fluid col-md-12 book-result modal-result-details">
                            <div className="row">
                                <Image className="col-md-3"src={this.props.book.image}/>
                                <div className="col-md-9">
                                    <BookSearchResultTable book={this.props.book} 
                                    categories={categories} locations={locations}
                                    selectedCategory={this.state.selectedCategory} selectedLocation={this.state.selectedLocation}
                                    categorySelector={this.onCategorySelect} locationSelector={this.onLocationSelect}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="container-fluid">
                                    <div className="row modal-result-button-area center-block">
                                        <div className="col-md-6">
                                            <button className="btn btn-success center-block modal-result-button" onClick={this.onSubmitClick}>제출하기</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-danger center-block modal-result-button" onClick={this.onModalHide}>닫아버리기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    </Modal.Body>
                    
            </Modal>
        );
    }
}

export default BookSearchResult;