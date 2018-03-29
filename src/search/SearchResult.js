import React, { Component } from 'react';
import MainNavbar from '../main/main-navbar/MainNavbar';
import MainFooter from '../main/MainFooter';
import './search.css';
import SearchResultTable from './SearchResultTable';

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: undefined,
        }
    }
    render() {
        return(
            <div className="main-search">
                <MainNavbar/>
                <div className="main-search search-component searchresult-body">
                    <h3 className="text-center searchresult-title">검색 결과</h3>
                    <div className="container-fluid searchresult-table">
                        <SearchResultTable/>
                    </div>
                </div>
                <div className="container-fluid default-footer">
                    <MainFooter/>
                </div>
            </div>
        )
    }

}

export default SearchResult;