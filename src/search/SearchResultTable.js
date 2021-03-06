import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './search.css';
import SearchBookStatus from './SearchBookStatus';
import SearchBookCategories from './SearchBookCategories';

const TestBook = function(title, author, category, location) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.location = location;
}

const SearchResultTable = (props) => {
    return(
    <Table>
        <thead>
            <tr>
                <th className="book-code">#</th>
                <th className="book-title">제목(카테고리)</th>
                <th className="book-author">저자</th>
                <th className="book-loc">위치</th>
                <th className="book-status">대여정보</th>
            </tr>
        </thead>
        <tbody>
            {props.books.map((book, i) => {
                return(
                    <tr>
                        <td>{i + 1}</td>
                        <td><Link to={`/books/${book.bookId}`}>{book.title}</Link>&nbsp;<SearchBookCategories category={book.category}/></td>
                        <td>{book.author.name}</td>
                        <td>{book.location}</td>
                        <td>
                            <SearchBookStatus statuses={book.status}/>
                        </td>
                    </tr>
                )
            })} 
        </tbody>
    </Table>
    )
}


export default SearchResultTable;