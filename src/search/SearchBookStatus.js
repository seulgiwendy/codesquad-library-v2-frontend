import React from 'react';
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './search.css';

const SearchBookStatus = (props) => {
    console.log(props.statuses);
    return(
        <div>
            {props.statuses.map(status => {
                console.log(status);
                let description = (
                    <Tooltip id="description">
                        <strong>{status.code}</strong>
                    </Tooltip>
                );
                return (
                <span className="searchresult-table-glyphs">
                    <OverlayTrigger placement="top" overlay={description}>
                        <Glyphicon glyph={status.glyphicons}/>
                    </OverlayTrigger>
                </span>
                )
            })}
        </div>
    )
}

export default SearchBookStatus;