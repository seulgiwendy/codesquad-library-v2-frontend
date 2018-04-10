import React, {Component} from 'react';
import './search.css';
import MainNavbar from '../main/main-navbar/MainNavbar';
import MainFooter from '../main/MainFooter';
import { Redirect } from 'react-router-dom';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookCount: 0,
            criteria:[],
            currentCategory: undefined,
            currentCriteria: undefined,
            redirect: undefined
        }
        this.handleCriteriaButtonToggle = this.handleCriteriaButtonToggle.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleEnterButtonPress = this.handleEnterButtonPress.bind(this);
        this._setCriteria = this._setCriteria.bind(this);

    }

    componentWillMount() {
        console.log(this.state.currentCategory);
        document.addEventListener("keydown", this.handleEnterButtonPress, false)
        
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEnterButtonPress, false);
    }

    componentDidMount() {
        this._setCriteria()
    }

   _setCriteria = async () => {
        const info = await this._fetchCriteria();

        console.log(info);
        this.setState({
            bookCount: info.bookCount,
            criteria: info.criteria,
            currentCategory: info.criteria[0].canonicalCategory,
            currentCriteria: info.criteria[0].criteria
        });
   }

   _fetchCriteria() {
        return fetch('http://library-api.wheejuni.com/api/test/search').then(res => res.json()).catch(err => console.error(err));
   }

    handleCriteriaButtonToggle(event) {
        console.log(event);
        this.setState({
            currentCategory: this.state.criteria[event].canonicalCategory,
            currentCriteria: this.state.criteria[event].criteria
        })
    }

    handleEnterButtonPress(event) {
        console.log(event);
        if(event.key !== 'Enter') {
            return;
        }
        this.handleSearchButtonClick();
    }

    handleSearchButtonClick(event) {
        if(document.getElementById('search-query') === null) {
            window.alert('검색어가 입력되지 않았습니다.')
            return;
        }
        let query = document.getElementById('search-query').value;    
        this.setState({
            redirect: <Redirect to={`/search/result/?criteria=${this.state.currentCriteria}&query=${query}`}/>
        });
    }

    render() {
        if(this.state.redirect != undefined) {
            return(this.state.redirect);
        }

        return(
            <div className="main-search">
                
                <div className="search-component">
                    <div className="search-view">
                        <h1 className="text-center">검색하기</h1>
                        <p className="text-center">코드스쿼드의 수많은 책들을 검색해보세요. 현재 {this.state.bookCount}권의 책이 준비되어 있습니다.</p>
                    </div>
                    <div className="container-fluid">
                        <div className="search-box center-block">
                            <FormGroup className="search-box search-form center-block">
                                <InputGroup>
                                    <FormControl type="text" id="search-query"/>
                                    <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title={this.state.currentCategory} onSelect={this.handleCriteriaButtonToggle}>
                                        {this.state.criteria.map((content, i) => {
                                            return(
                                                <MenuItem eventKey={i}>{content.canonicalCategory}</MenuItem>  
                                            )
                                        })}
                                    </DropdownButton> 
                                </InputGroup>
                            </FormGroup>
                        </div>
                        <button className="btn btn-success center-block" onClick={this.handleSearchButtonClick}>검색하기</button>
                    </div>
                </div>
                
            </div>
            
        )
    }
}


export default SearchPage;