import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const SearchBookCategories = (props) => {
    let overlay = (
        <Tooltip id='category'>
            <strong>Java</strong>
        </Tooltip>
    );
    return(
        <OverlayTrigger placement="top" overlay={overlay}>
            <i className="devicon-java-plain searchresult-category"/>
        </OverlayTrigger>
    )
}

export default SearchBookCategories;