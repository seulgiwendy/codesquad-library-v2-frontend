import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const BookDetailsTable = (props) => {
    return(
        <Table striped bordered condensed hover>
            <tbody>
                <tr>
                    <td>저자 </td>
                    <td>{props.book.author.name}</td>
                </tr>
                <tr>
                    <td>장서번호 </td>
                    <td>{props.book.bookId}</td>
                </tr>
                
                <tr>
                    <td>카테고리</td>
                    <td>{props.book.category.category}&nbsp;<span className={props.book.category.iconTag}/></td>
                </tr>
                <tr>
                    <td>위치</td>
                    <td>백엔드 쪽 책장</td>
                </tr>
                <tr>
                    <td>대여</td>
                    <td>{props.book.status[0].code}</td>
                </tr>
            </tbody>
        </Table>
    )
}

BookDetailsTable.propTypes = {
    book: PropTypes.object
}

export default BookDetailsTable;