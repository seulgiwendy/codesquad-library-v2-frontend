import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import './main.css';

class MainFeatured extends Component {

    render() {
        return(
            <div className="container-fluid main-container">
                {this.props.featured.map(featured => {
                    return(
                        <Panel className="main-featured">
                            <Panel.Body>
                            {featured.category}
                            <h1 className="main-text">{featured.title}</h1>
                            </Panel.Body>
                        </Panel>
                    )
                })}
            </div>
        )
    }
}

MainFeatured.propTypes = {
    featured: PropTypes.array
};

export default MainFeatured;