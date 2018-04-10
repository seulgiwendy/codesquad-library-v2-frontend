import React, { Component } from 'react';
import MainNavbar from '../main/main-navbar/MainNavbar';
import MainFooter from '../main/MainFooter';
import './search.css';
import SearchResultTable from './SearchResultTable';
import { withRouter } from 'react-router-dom';

const queryString = require('querystring');

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
        this.setState({
            searchresult: results
        });
    }

    __fetchSearchResult() {
        const location = this.props.location.search.split("?")
        const queryParams = queryString.parse(location[1]);
        let searchDocument = new QueryDocument(queryParams.criteria, queryParams.query);

        return fetch('http://library-api.wheejuni.com/api/test/search', {
            body: JSON.stringify(searchDocument),
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
        }).then(res => res.json()).catch(err => window.alert(err));
    }
    render() {
        return(
            <div className="main-search">
                <div className="main-search search-component searchresult-body">
                    <h3 className="text-center searchresult-title">검색 결과</h3>
                    <div className="container-fluid searchresult-table">
                        <SearchResultTable books={this.state.searchresult}/>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default withRouter(SearchResult);