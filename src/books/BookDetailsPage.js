import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './books.css';

class BookDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: undefined
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return(
            <div className="book-details">
                <div className="container-fluid">
                    <h3 className="text-center book-details-title">this will be the title of book.</h3>
                </div>
                <div className="container-fluid book-details-body">
                    <div className="row">
                        <div className="col-md-3">
                            this is a picture.
                        </div>
                        <div className="col-md-9">
                            this is a details table.
                        </div>
                    </div>
                </div>
                <div className="container-fluid book-details-replies">
                    <h4 className="text-center">this will be the replies container.</h4>
                </div>
            </div>
        )
    }

}

export default withRouter(BookDetailsPage);