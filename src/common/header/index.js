import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HeaderNav, HeaderContainer, HeaderLeft, HeaderRight, NavList } from './style';
import { actions } from '../../pages/login/store'
class Header extends Component {

    logout() {
        console.log(111111111)
    }

    render() {
        const { token } = this.props;
        return (
            <Fragment>
                <HeaderNav>
                    <HeaderContainer>
                        <HeaderLeft>
                            <a className="logo">
                                <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
                            </a>
                            <form>
                                <input type="text" />
                            </form>
                        </HeaderLeft>
                        <HeaderRight>
                            <NavList>
                                <li>
                                    <Link to="/home/all">首页 </Link>
                                </li>
                                <li>
                                    未读消息
                                    <span className="badge" >18</span>
                                </li>
                                <li>
                                    新手入门
                                </li>
                                <li>
                                    API
                                </li>
                                <li>
                                    关于
                                </li>
                                <li>
                                    设置
                                </li>
                                {
                                    token ? '' : (<li>
                                        <Link to="/login" >登录</Link>
                                        </li>)
                                }
                                {
                                    token ? (<li>
                                        <Link to="/login" onClick={this.props.logout}>退出</Link>
                                    </li>) : ''
                                }

                            </NavList>

                        </HeaderRight>
                    </HeaderContainer>
                </HeaderNav>
            </Fragment>
        )
    }
}

export default connect(
    (state) => {
        return { token: state.login.token }
    },
    (dispatch) => {
        return {
            logout() {
                dispatch(actions.LOGOUT())
            }
        }
    })(Header)