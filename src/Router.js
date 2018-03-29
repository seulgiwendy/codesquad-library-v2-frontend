import React, {Component} from 'react';
import MainComponent from './main/MainComponent';
import SearchPage from './search/SearchPage';
import {Route} from 'react-router-dom';
import SearchResult from './search/SearchResult';

class Router extends Component {
    render() {
        return(
            <div>
                <Route exact path="/" component={MainComponent}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/search/result" component={SearchResult}/>
            </div>
        )
    }
}

export default Router;
