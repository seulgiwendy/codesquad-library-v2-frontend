import React from 'react';
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './search.css';

const SearchBookStatus = (props) => {
    return(
        <div>
            {props.icons.map(icons => {
                let description = (
                    <Tooltip id="description">
                        <strong>{props.description}</strong>
                    </Tooltip>
                );
                return (
                <span className="searchresult-table-glyphs">
                    <OverlayTrigger placement="top" overlay={description}>
                        <Glyphicon glyph={icons}/>
                    </OverlayTrigger>
                </span>
                )
            })}
        </div>
    )
}

export default SearchBookStatus;