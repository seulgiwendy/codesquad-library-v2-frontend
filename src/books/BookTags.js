import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags} from 'react-tag-input';

const TEMP_TAGURL = 'http://localhost:8080/api/test/tags';

const DisplayTags = function(text, index) {
    if(!this instanceof DisplayTags) {
        return new DisplayTags(text, index);
    }
    this.text = text;
    this.index = index;
}

const NewTag = function(bookId, tagTitle) {
    if(!this instanceof NewTag) {
        return new NewTag(bookId, tagTitle);
    }
    this.bookId = bookId;
    this.tagTitle = tagTitle;
}

DisplayTags.prototype.toString = function() {
    return `Tag name: ${this.text}, ID: ${this.index}`;
}

class BookTags extends Component {

    constructor(props) {
        super(props);
        this.postTags = this.postTags.bind(this);

        this.state = {
            tags: []
        }
    }

    postTags = (tag) => {

        if(this.state.tags.length >= 2) {
            window.alert('태그는 두개까지 붙일 수 있습니다. 앞으로 업데이트되면 개선될 수도? ㅋㅋ');
            return;
        }

        console.log(tag);
        console.log(this.props.bookid);
        
        fetch(TEMP_TAGURL, {
            method: 'POST',
            body: JSON.stringify(new NewTag(this.props.bookid, tag)),
            headers: {
                'content-type' : 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(json => {
            let newTags = json.tags.map(tag => {
                return new DisplayTags(tag.tagTitle, tag.tagsetId);
            });
            this.setState({
                tags : newTags
            })
        });
    }

    componentDidMount() {
        console.log(this.props.tags);
        let displayTags = this.props.tags.map(tag => {
            return new DisplayTags(tag.tagTitle, tag.tagsetId);
        })

        this.setState({
            tags: displayTags
        });
    }

    render() {
        console.log(this.state.tags);
        
        return (
            <ReactTags tags={this.state.tags} handleAddition={this.postTags}/>
        )
    }
    
}

export default BookTags;