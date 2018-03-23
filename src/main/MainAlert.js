import React, {Component} from 'react';
import {Alert, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './main.css';

class MainAlert extends Component {
    render() {
        return(
            <div className="main-body-bottom">
                {this.props.alerts.map(alert => {
                    return(
                        <Alert bsStyle={alert.color}>
                            {alert.headline}
                        </Alert>
                    )
                })}
            </div>
        )
    }
}

MainAlert.proptypes = {
    alerts: PropTypes.array
};

export default MainAlert;