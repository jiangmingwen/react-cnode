import React, { Component, Fragment } from 'react';
import { HomeContentHeader } from '../style';
import { NavLink } from 'react-router-dom';
export default class HomeHeader extends Component {
    state = {
        headerList: [
            {
                to: 'all',
                title: '全部'
            },
            {
                to: 'good',
                title: '精华'
            },
            {
                to: 'share',
                title: '分享'
            },
            {
                to: 'ask',
                title: '问答'
            },
            {
                to: 'job',
                title: '招聘'
            },
            {
                to: 'dev',
                title: '客户端测试'
            }
        ]
    }
    render() {
        return (
            <HomeContentHeader>
                {this.state.headerList.map(item => (<span key={item.to}>
                    <NavLink  to={'/home/'+ item.to} activeClassName="active" >
                         {item.title}
                    </NavLink>
                </span>))}
            </HomeContentHeader>

        )
    }
}