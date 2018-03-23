import React, {Component} from 'react';
import './search.css';
import MainNavbar from '../main/main-navbar/MainNavbar';
import MainFooter from '../main/MainFooter';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

const bookCount = 10000;
const criteria = ['제목', '저자', 'ISBN'];

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookCount: 0,
            currentCategory: criteria[0]
        }
        this.handleCriteriaButtonToggle = this.handleCriteriaButtonToggle.bind(this);
    }

    componentDidMount() {
        console.log(this.state.currentCategory);
        this.setState({
            bookCount: 10000,
        })
    }

    handleCriteriaButtonToggle(event) {
        console.log(event);
        this.setState({
            currentCategory: event
        })
    }

    render() {
        return(
            <div className="main-search">
                <MainNavbar/>
                <div className="main-search search-component">
                    <div className="main-search search-view">
                        <h1 className="text-center">검색하기</h1>
                        <p className="text-center">코드스쿼드의 수많은 책들을 검색해보세요. 현재 {this.state.bookCount}권의 책이 준비되어 있습니다.</p>
                    </div>
                    <div className="container-fluid">
                        <div className="search-box center-block">
                            <FormGroup className="search-box search-form center-block">
                                <InputGroup>
                                    <FormControl type="text"/>
                                    <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title={this.state.currentCategory} onSelect={this.handleCriteriaButtonToggle}>
                                        {criteria.map((content, i) => {
                                            return(
                                                <MenuItem eventKey={content}>{content}</MenuItem>  
                                            )
                                        })}
                                    </DropdownButton> 
                                </InputGroup>
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="container-fluid default-footer">
                    <MainFooter/>
                </div>
            </div>
            
        )
    }
}

const searchRequest = (keyword, criteria) => {

}

export default SearchPage;