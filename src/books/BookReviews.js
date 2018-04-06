import React, { Component } from 'react';
import { ListGroup, Pager } from 'react-bootstrap';
import ReactStars from 'react-stars';
import './books.css';

class BookReviews extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            prepared: false
        }
    }

    componentDidMount() {
        console.log(this.state.prepared);
    }

    render() {

        if(!this.state.prepared) {
            return(
                <div className="book-details-replies-construction content-wrapepr">
                    <h3 className="text-center book-details-replies-construction">서평 기능은 준비중입니다. <br/><br/> 언젠간 되지 않겠습니까?</h3>
                </div>
            )
        }

        return(
            <div className="panel-body">
                <ListGroup>
                    <li className="list-group-item container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="list-group-item-heading">너무 좋았어요.</h4>
                                <p class="list-group-item-text">역시 갓눅스!</p>
                            </div>
                            <div className="col-md-6">
                                <ReactStars className="book-details-replies-stars pull-right" count={5} size={25} value={5} edit={false}/>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h4 className="list-group-item-heading">그냥 그랬어요.</h4>
                        <p class="list-group-item-text">흠.....</p>
                    </li>
                    <li className="list-group-item">
                        <h4 className="list-group-item-heading">완전 별로였어요.</h4>
                        <p class="list-group-item-text">하......</p>
                    </li>
                </ListGroup>
                <Pager>
                    <Pager.Item href="#">Previous</Pager.Item>
                    <Pager.Item href="#">Next</Pager.Item>
                </Pager>
                <button className="btn btn-default center-block">서평 남기기</button>
            </div>
        )
    }
    
}

export default BookReviews;