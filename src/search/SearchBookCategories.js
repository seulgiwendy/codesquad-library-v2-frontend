import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const SearchBookCategories = (props) => {
    let overlay = (
        <Tooltip id='category'>
            <strong>{props.category.category}</strong>
        </Tooltip>
    );
    return(
        <OverlayTrigger placement="top" overlay={overlay}>
            <i className={props.category.iconTag}/>
        </OverlayTrigger>
    )
}

export default SearchBookCategories;