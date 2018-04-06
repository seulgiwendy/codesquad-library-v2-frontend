import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './main.css';

class MainAlert extends Component {
    render() {
        return(
            <div className="main-body-bottom">
                <Alert bsStyle="warning">
                    <span className="glyphicon glyphicon-ok"></span>&nbsp;안녕하세요. 코드스쿼드 도서관입니다.<br/>
                    1.0.0 버전입니다. 간단한 도서 검색과 정보 확인, 태그 붙이기를 지원합니다.<br/>
                    다음 버전에서는 회원가입 / 로그인, 대여(마스터들이 허락한다면? ㅋㅋㅋ) 기능을 구현할 예정입니다.<br/>
                    코드스쿼드에는 좋은 책이 많습니다! 책과 함께 즐거운 개발 되세요.
                </Alert>
                <Alert bsStyle="success">
                    <span className="glyphicon glyphicon-envelope"></span>&nbsp;의견 보내주실곳<br/>
                    이메일: <a href="mailto:me@wheejuni.com">me@wheejuni.com</a><br/>
                    GitHub(BE) : <a href="https://github.com/seulgiwendy/codesquad-library-v2">깃허브 바로가기</a><br/>
                    GitHub(FE) : <a href="https://github.com/seulgiwendy/codesquad-library-v2-frontend">깃허브 바로가기</a>
                </Alert>
            </div>
        )
    }
}

MainAlert.proptypes = {
    alerts: PropTypes.array
};

export default MainAlert;