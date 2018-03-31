import React, { Component } from 'react';
import MainNavbar from '../main/main-navbar/MainNavbar';
import MainFooter from '../main/MainFooter';
import './search.css';
import SearchResultTable from './SearchResultTable';
import { withRouter } from 'react-router-dom';

const queryString = require('query-string');

const QueryDocument = function(criteria, query) {
    if(!this instanceof QueryDocument) {
        return new QueryDocument(criteria, query);
    }

    this.criteria = criteria;
    this.query = query;
}

QueryDocument.prototype.toString = function() {
    return `criteria: ${this.criteria}, query:${this.query}`;
}

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchresult: []
        }
        this.__setSearchResult = this.__setSearchResult.bind(this);
    }

    componentDidMount() {
        this.__setSearchResult();
    }

    __setSearchResult = async () => {
        const results = await this.__fetchSearchResult();

        console.log(results);
        this.setState({
            searchresult: results
        });
    }

    __fetchSearchResult() {
        const queryParams = queryString.parse(this.props.location.search);
        console.log(queryParams);
        let searchDocument = new QueryDocument(queryParams.criteria, queryParams.query);

        console.log(searchDocument);

        return fetch('http://localhost:8080/api/test/search', {
            body: JSON.stringify(searchDocument),
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
        }).then(res => res.json()).catch(err => window.alert(err));
    }
    render() {
        console.log(this.state.searchresult);
        return(
            <div className="main-search">
                <MainNavbar/>
                <div className="main-search search-component searchresult-body">
                    <h3 className="text-center searchresult-title">검색 결과</h3>
                    <div className="container-fluid searchresult-table">
                        <SearchResultTable books={this.state.searchresult}/>
                    </div>
                </div>
                <div className="container-fluid default-footer">
                    <MainFooter/>
                </div>
            </div>
        )
    }

}

export default withRouter(SearchResult);