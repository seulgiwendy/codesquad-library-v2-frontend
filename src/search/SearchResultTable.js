import React from 'react';
import { Table, Glyphicon } from 'react-bootstrap';
import './search.css';
import SearchBookStatus from './SearchBookStatus';
import SearchBookCategories from './SearchBookCategories';

const TestBook = function(title, author, category, location) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.location = location;
}

const testBooks = [new TestBook('hi', 'fuck', 'that', 'shit'), new TestBook('hi', 'fuck', 'that', 'shit'), new TestBook('hi', 'fuck', 'that', 'shit')]

const SearchResultTable = (props) => {
    return(
    <Table>
        <thead>
            <tr>
                <th className="book-code">#</th>
                <th className="book-title">제목(카테고리)</th>
                <th className="book-author">저자</th>
                <th className="book-cat">카테고리</th>
                <th className="book-loc">위치</th>
                <th className="book-status">정보</th>
            </tr>
        </thead>
        <tbody>
            {testBooks.map((books, i) => {
                return(
                    <tr>
                        <td>{i + 1}</td>
                        <td>{books.title} <SearchBookCategories/></td>
                        <td>{books.author}</td>
                        <td>{books.category}</td>
                        <td>{books.location}</td>
                        <td>
                            <SearchBookStatus icons={['ok', 'remove', 'align-justify']} description='hello'/>
                        </td>
                    </tr>
                )
            })}
            
        </tbody>
    </Table>
    )
}


export default SearchResultTable;