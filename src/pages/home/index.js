import React, { Component, Fragment } from 'react';
import { HomeContainer, HomeLeft, HomeRight, RightCnodeGuide } from './style';
import HomeHeader from './components/homeHeader';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
const adList = [{
    id: 1,
    content: '广告位招租',
    phone: '187****9585',
    email: '649731870@qq.com',
},
{
    id: 2,
    content: '广告位招租',
    phone: '187****9585',
    email: '649731870@qq.com',
},
{
    id: 3,
    content: '广告位招租',
    phone: '187****9585',
    email: '649731870@qq.com',
}]

class Home extends Component {
    render() {
        const { token } = this.props;
        return <HomeContainer>
            <HomeLeft>
                <HomeHeader></HomeHeader>
                {this.props.children}
            </HomeLeft>
            <HomeRight>
                <RightCnodeGuide>
                    <div className="title">
                        <img src="//static2.cnodejs.org/public/images/cnode_icon_32.png" />
                        <span>   CNode: Node.js专业中文社区</span>
                    </div>
                    <div className="content">
                        {token ? '欢迎您' : '登陆后可以解锁更多姿势'}
                    </div>
                    <div className="button">
                        {token ? token : (<Button type="primary">
                            <Link to="/login">去登录</Link>
                        </Button>)}
                    </div>
                </RightCnodeGuide>
                {adList.map(ad => {
                    return (<RightCnodeGuide key={ad.id}>
                        <div style={{fontSize:'18px'}}>{ad.content}</div>
                        <div>电话: {ad.phone}</div>
                        <div>邮箱: {ad.email}</div>
                    </RightCnodeGuide>)
                })}
            </HomeRight>
        </HomeContainer>
    }
}


export default connect((state) => {
    return {
        token: state.login.token
    }
}, (dispatch) => {
    return {}
})(Home)


