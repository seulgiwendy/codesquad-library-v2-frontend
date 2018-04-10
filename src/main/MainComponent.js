import React, {Component} from 'react';
import MainNavbar from './main-navbar/MainNavbar';
import MainJumbotron from './main-jumbo/MainJumbotron';
import MainFooter from './MainFooter';
import MainFeatured from './MainFeatured';
import MainAlert from './MainAlert';
import BookModal from './book-modal/BookModal';
import { Modal, Form, FormGroup, ControlLabel, Button, FormControl, InputGroup } from 'react-bootstrap';
import request from 'superagent';
import './main.css'
import connect from 'react-redux/lib/connect/connect';
import * as modalCloseActions from '../reducers/actions';


const Featured = function(title, category) {

    if(!this instanceof Featured) {
        return new Featured(title, category);
    }

    this.title = title;
    this.category = category;
}

const Notice = function(headline, color) {

    if(!this instanceof Notice) {
        return new Notice(headline, color)
    }

    this.headline = headline;
    this.color = color
}


class MainComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            featured : [], 
            notice : [],
            new_notice: [],
            new_featured: [],
            newBookIsbn: 0,
            bookModalExpanded: this.props.bookModalExpanded,
            loginModalExpanded: false
        }
        this._setNotices = this._setNotices.bind(this);
    }

    componentWillMount () {

        this.setState({
            featured: [new Featured('JK의 책장', 'featured-article'), new Featured('포비의 책장', 'featured-article')
        ,new Featured('크롱의 책장', 'featured-article'), new Featured('호눅스의 책장', 'featured-article')],
            notice: [new Notice('독서하기 좋은 계절입니다. <strong>책을 읽읍시다!</strong>', "warning")]
        })
    }

    componentDidMount () {
        this._setNotices();
    }

    _setNotices = async () => {
        const notices = await this._fetchNotices(); 

        console.log(notices);
        this.setState({
            new_notice: notices
        });
    }

    _setFeatured = async () => {
        const featured = await this._fetchFeatured();

        console.log(featured);
        this.setState({
            new_featured: featured
        });
    }

    _fetchFeatured = () => {
        return fetch('http://library-api.wheejuni.com/api/info/featured')
            .then(res => res.json())
            .catch(err => console.error(err));
            
    }

    _fetchNotices = () => {
        return fetch('http://library-api.wheejuni.com/api/info/article')
        .then(res => res.json())
        .catch(err => console.error(err));
    }
    

    componentWillReceiveProps (nextProps) {
        console.log(nextProps.bookModalExpanded);
    }

    render() {
        return (
            <div className="main">
                <div className="main-body">
                    <MainJumbotron/>
                    <br/>
                    <div className="main-body-lower">
                        <h1 className="main-text">책을 많이 읽읍시다.</h1>
                        <h3 className="main-text">여러분의 개발을 도와주는 많은 책들이 준비되어 있습니다.</h3>
                    </div>
                </div>
                <MainAlert alerts={this.state.new_notice}/>                
            </div>
        )
    }
}

export default MainComponent;