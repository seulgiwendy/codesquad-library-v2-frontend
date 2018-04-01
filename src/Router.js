import React, {Component} from 'react';
import MainComponent from './main/MainComponent';
import SearchPage from './search/SearchPage';
import {Route} from 'react-router-dom';
import SearchResult from './search/SearchResult';
import './main/main.css';
import MainNavbar from './main/main-navbar/MainNavbar';
import MainFooter from './main/MainFooter';
import BookDetailsPage from './books/BookDetailsPage';

class Router extends Component {
    render() {
        return(
            <div>
                <MainNavbar/>
                <div>
                    <Route exact path="/" component={MainComponent}/>
                    <Route exact path="/search" component={SearchPage}/>
                    <Route exact path="/search/result" component={SearchResult}/>
                    <Route path="/books/:id" component={BookDetailsPage}/>
                </div>
            </div>
        )
    }
}

export default Router;
