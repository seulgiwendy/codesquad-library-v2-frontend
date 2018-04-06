import React from 'react';
import './featured.css';
import { Panel, ListGroup, ListGroupItem, Image, Label } from 'react-bootstrap';
import ReactStars from 'react-stars';

const FeaturedThumbs = (props) => {
    return (
        <div className="featured-thumbs container-fluid">
            <ListGroup>
                <ListGroupItem className="featured-thumbs-listitem row">
                    <div className="col-md-2 featured-thumbs-imgbox">
                        <Image src="http://bookthumb.phinf.naver.net/cover/118/232/11823284.jpg?type=m1&udate=20180215"/>
                    </div>
                    <div className="col-md-7 featured-thumbs-text">
                        <h4>헬로코딩 알고리즘</h4>
                        <div className="featured-thumbs-text-bottom">
                            "이 편지는 19세기 영국으로부터 시작되어 전 세계로 퍼져나간 행운의 편지로써 받는 사람은 3일 안에 다음 사람에게 최소 세 통의 편지를 복사해 보내야 합니다...."
                        </div>
                    </div>
                    <div className="col-md-3 featured-thumbs-tags pull-right">
                        <div className="featured-thumbs-iconset row">
                            <Label bsStyle="primary" className="featured-thumbs-tagicon pull-right">JAVA</Label>
                            <Label bsStyle="primary" className="featured-thumbs-tagicon pull-right">ALGORITHM</Label>
                        </div>
                        <div className="featured-thumbs-tagtext row pull-right">
                            <ReactStars count={5} size={20} value={4.5} edit={false}/>
                        </div>
                    </div>
                </ListGroupItem>
                <ListGroupItem className="featured-thumbs-listitem row">
                    <div className="col-md-2 featured-thumbs-imgbox">
                        <Image src="http://bookthumb.phinf.naver.net/cover/118/232/11823284.jpg?type=m1&udate=20180215"/>
                    </div>
                    <div className="col-md-7 featured-thumbs-text">
                        <h4>헬로코딩 알고리즘</h4>
                        <div className="featured-thumbs-text-bottom">
                            "이 편지는 19세기 영국으로부터 시작되어 전 세계로 퍼져나간 행운의 편지로써 받는 사람은 3일 안에 다음 사람에게 최소 세 통의 편지를 복사해 보내야 합니다...."
                        </div>
                    </div>
                    <div className="col-md-3 featured-thumbs-tags pull-right">
                        <div className="featured-thumbs-iconset row">
                            <Label bsStyle="primary" className="featured-thumbs-tagicon pull-right">JAVA</Label>
                            <Label bsStyle="primary" className="featured-thumbs-tagicon pull-right">ALGORITHM</Label>
                        </div>
                        <div className="featured-thumbs-tagtext row pull-right">
                            <ReactStars count={5} size={20} value={4.5} edit={false}/>
                        </div>
                    </div>
                </ListGroupItem>
                
            </ListGroup>
        </div>
    );
}

export default FeaturedThumbs;