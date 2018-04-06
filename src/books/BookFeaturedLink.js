import React from 'react';
import { Link } from 'react-router-dom';

const BookFeaturedLink = (props) => {
    let href = props.featured.featuredHref === 'undefined' ? '#' : `/featured/${props.featuredHref}`; 
    
    return(
        <Link to={href}>{props.featured.featuredTitle}</Link>
    )
}

export default BookFeaturedLink;