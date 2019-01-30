import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from './store';

import { Redirect } from 'react-router-dom';

import { LoginContainer, LoginHeader, LoginRight, LoginLeft, LoginContent, LoginAboutContent } from './style';
class Login extends Component {

    state = {
        inputVal: '',
        redirect: false
    }

    constructor(props) {
        super(props);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ inputVal: event.target.value })
    }

    onSubmitClick() {
        this.props.login(this.state.inputVal)
        this.setState({ redirect: true });
    }

    render() {
        if(this.state.redirect){
            return <Redirect push to="/home/all" />
        }
        return <Fragment>
            <LoginContainer>
                <LoginLeft>
                    <LoginHeader>
                        <span className="home">
                            <Link to="/">主页</Link>
                        </span>/<span>登录</span>
                    </LoginHeader>
                    <LoginContent>
                        <div className="form">
                            <div className="form-control">
                                <span>AccessToken:</span>
                                <span>
                                    <input onChange={this.onInputChange} value={this.state.inputVal} type="text" placeholder="请输入你的AccessToken" />
                                </span>
                            </div>
                            <div className="form-control submit">
                                <button type="button" onClick={this.onSubmitClick}>登录</button>
                            </div>
                        </div>
                    </LoginContent>
                </LoginLeft>
                <LoginRight>
                    <LoginHeader>
                        <span>关于</span>
                    </LoginHeader>
                    <LoginAboutContent>
                        <p>CNode：Node.js专业中文社区</p>
                        <p>在这里你可以：</p>
                        <ul>
                            <li>向别人提出你遇到的问题</li>
                            <li>帮助遇到问题的人</li>
                            <li>分享自己的知识</li>
                            <li>和其它人一起进步</li>
                        </ul>
                    </LoginAboutContent>
                </LoginRight>
            </LoginContainer>
        </Fragment>
    }
}

export default connect((state) => {
    return { token: state.login.token }
}, (dispatch) => {
    return {
        login(token) {
            dispatch(actions.LOGIN(token))
        }
    }

})(Login)