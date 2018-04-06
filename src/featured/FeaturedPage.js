import React, { Component } from 'react';
import './featured.css';
import FeaturedJumbotron from './FeaturedJumbotron';
import FeaturedThumbs from './FeaturedThumbs';

class FeaturedPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            feature: undefined
        }
    }

    render() {
        return(
            <div className="featured-body">
                <h3 className="text-center">힘차게 알고리즘! 알알못 그대에게</h3>
                <FeaturedJumbotron/>
                <FeaturedThumbs/>
            </div>
        )
    }
}

export default FeaturedPage;
