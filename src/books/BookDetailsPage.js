import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import './books.css';
import './reacttags.css';
import { Image, Table, Glyphicon, ListGroup, ListGroupItem, Pager } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';
import { RiseLoader } from 'react-spinners';
import ReactStars from 'react-stars';
import BookReviews from './BookReviews';
import LoadingScreen from '../loading/LoadingScreen';
import { setTimeout } from 'timers';
import BookFeaturedLink from './BookFeaturedLink';
import BookTags from './BookTags';
import BookDetailsTable from './BookDetailsTable';

const suggestions = ['자바', '자바스크립트', '스위프트', '초급자용', '중급자용'];
const tags = [{text: 'Java'}, {text: 'JavaScript'}];

const TEMP_URL = "http://library-api.wheejuni.com/api/test/books/";


class BookDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: undefined,
            bookTags: [],
            isLoading: true,
            isInvalidRequest: false
        }
        this._fetchBookInfo = this._fetchBookInfo.bind(this);
        this._setBookInfo = this._setBookInfo.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this._setBookInfo();
        
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
    }

    _setBookInfo = async () => {
        const bookInfo = await this._fetchBookInfo();
        console.log(bookInfo);
        this.setState({
            book: bookInfo,
            bookTags: bookInfo.tags,
            isLoading: false
        });
    }

    _fetchBookInfo() {
        return fetch(this.generateBookUrl(this.props.match.params.id), {
            method: 'GET'
        }).then(res => {
            if (res.status == 404) {
                this.setState({
                    isInvalidRequest: true
                });
                return undefined;
            }
            return res.json()})
        .catch(err => {
            this.setState({
                isInvalidRequest: true
            })
            console.error(err)});

    }

    generateBookUrl = id => {
        return TEMP_URL + id;
    }

    render() {

        if(this.state.isInvalidRequest) {
            window.alert('유효하지 않은 도서정보입니다!')
            return(
                <Redirect to={'/search'}/>
            )
        }

        if(this.state.isLoading) {
            return(
                <LoadingScreen/>
            )
        }
        console.log(this.state.book);
        return(
            <div className="book-details-main">
                <div className="container-fluid">
                    <h3 className="text-center book-details-title">{this.state.book.title}</h3>
                </div>
                <div className="container-fluid book-details book-details-body">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="container-fluid book-details-img">
                                <div className="book-details-imgbox center-block">
                                    <Image className="book-details-imgbox img-src"src="https://s3.ap-northeast-2.amazonaws.com/codesquad-library-static/noimg.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <BookDetailsTable book={this.state.book}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid book-details book-details-tags">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="book-details-tags-title"><span className="glyphicon glyphicon-tag"/>TAGS.</strong>
                        <BookTags tags={this.state.book.tags} bookid={this.state.book.bookId}/>
                    </div>
                    <div className="col-md-3">
                        <div><strong><span className="glyphicon glyphicon-flag"/> FEATURED: </strong></div>
                        <BookFeaturedLink featured={this.state.book.featured}/>
                    </div>
                    <div className="col-md-3">
                        <div><strong><span className="glyphicon glyphicon-star"/>RATINGS: {this.state.book.averageRating}</strong></div>
                        <ReactStars count={5} size={20} value={this.state.book.averageRating} edit={false}/>
                    </div>
                </div>
                </div>
                <div className="book-details book-details-description panel panel-default">
                    <div className="panel-heading">
                        <h4 className="book-details-description-header panel-title"> 설명 </h4>
                    </div>
                    <div className="book-details-description-container">
                        <Glyphicon glyph="chevron-right"/> 
                        {this.state.book.description}
                    </div>
                </div>
                <div className="book-details book-details-replies panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">한줄 서평</h4>
                    </div>
                    <BookReviews/>
                </div>
            </div>
        )
    }

}

export default withRouter(BookDetailsPage);