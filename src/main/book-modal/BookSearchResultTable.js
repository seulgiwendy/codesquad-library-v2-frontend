import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import './bookmodal.css';

const BookSearchResultTable = (props) => {
    return(
        <Table>
            <tbody>
                <tr>
                    <td>저자</td>
                    <td>{props.book.author}</td>
                </tr>
                <tr>
                    <td>출판사</td>
                    <td>{props.book.publisher}</td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td>{props.book.price}원</td>
                </tr>
                <tr>
                    <td>위치</td>
                    <td>
                        <DropdownButton title={props.selectedLocation} className="locations-dropdown" onSelect={props.locationSelector}>
                            {props.locations.map((loc, i) => {
                                return(
                                    <MenuItem eventKey={loc}>{`${i + 1}. ${loc}`}</MenuItem>
                                )
                            })}
                        </DropdownButton>
                    </td>
                </tr>
                <tr>
                    <td>카테고리</td>
                    <td>
                        <DropdownButton title={props.selectedCategory} className="locations-dropdown" onSelect={props.categorySelector}>
                            {props.categories.map((cat, i) => {
                                return(
                                    <MenuItem eventKey={cat}>{`${i}. ${cat}`}</MenuItem>
                                )
                            })}
                        </DropdownButton>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

BookSearchResultTable.propTypes = {
    book: PropTypes.element.isRequired,
    categories: PropTypes.element.isRequired,
    locations: PropTypes.element.isRequired,
    selectedCategory: PropTypes.string,
    selectedLocation: PropTypes.string,
    categorySelector: PropTypes.func,
    locationSelector: PropTypes.func
};

export default BookSearchResultTable;