import React, { Component } from 'react';
import { Modal, Image, Grid, Row, Table, DropdownButton, MenuItem } from 'react-bootstrap';
import './bookmodal.css';
import BookSearchResultTable from './BookSearchResultTable';

const locations = ['출입구 옆 책장', '프론트엔드 책장', '백엔드 책장'];
const categories = ['소프트웨어공학', '자바', '스위프트', '자바스크립트'];

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
                                            <button className="btn btn-success center-block modal-result-button">제출하기</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-danger center-block modal-result-button">닫아버리기</button>
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