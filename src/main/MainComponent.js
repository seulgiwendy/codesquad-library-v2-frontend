import React, {Component} from 'react';
import MainNavbar from './main-navbar/MainNavbar';
import MainJumbotron from './main-jumbo/MainJumbotron';
import MainFooter from './MainFooter';
import MainFeatured from './MainFeatured';
import MainAlert from './MainAlert';
import { Modal } from 'react-bootstrap';
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
            bookModalExpanded: this.props.bookModalExpanded,
            loginModalExpanded: false
        }
    }

    componentWillMount () {
        console.log('fuck you world!')

        this.setState({
            featured: [new Featured('JK의 책장', 'featured-article'), new Featured('포비의 책장', 'featured-article')
        ,new Featured('크롱의 책장', 'featured-article'), new Featured('호눅스의 책장', 'featured-article')],
            notice: [new Notice('독서하기 좋은 계절입니다. <strong>책을 읽읍시다!</strong>', "warning")]
        })
    }

    componentDidMount () {
        console.log(this.state.featured);
        console.log(this.props.bookModalExpanded);
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps.bookModalExpanded);
    }

    render() {
        return (
            <div className="main">
                <MainNavbar/>
                <div className="main-body">
                    <MainJumbotron/>
                    <br/>
                    <div className="main-body-lower">
                        <h1 className="main-text">책을 많이 읽읍시다.</h1>
                        <h3 className="main-text">여러분의 개발을 도와주는 많은 책들이 준비되어 있습니다.</h3>
                    </div>
                </div>
                <MainFeatured featured={this.state.featured}/>
                <MainAlert alerts={this.state.notice}/>
                <div className="container-fluid default-footer">
                    <MainFooter/>
                </div>
                <Modal show={this.props.bookModalExpanded} onHide={this.props.onBookModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shit!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>shit! fuck!</h4>
                        <p>Redux is too difficult!</p>
                    </Modal.Body>

                </Modal>
                
            </div>
        
        )
    }
}

let mapStateToProps = (state) => {
    return {
        bookModalExpanded: state.bookmodal.expand
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onBookModalClose: () => dispatch(modalCloseActions.bookClose())
    }
}

MainComponent = connect(mapStateToProps, mapDispatchToProps) (MainComponent);

export default MainComponent;