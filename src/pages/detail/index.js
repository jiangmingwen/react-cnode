import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/action';
import * as Utils from '../../utils';
import { DetailContainer, DetailBox, Panel, TopicInnner, TopicHeader, TopicReply, ReplyItem, Sidebar, SidebarPanel,RightCnodeGuide } from './style';
import { Icon } from 'antd';
import moment from 'moment';
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


class Detail extends Component {
    state = {
        detailId: ''
    }
    initData() {
        this.props.initDetailData(Utils.getUrlObj(this.props.location.search).id, this.props.token)
    }


    componentDidMount() {
        console.log(this.props)
        this.initData();
    }

    render() {
        const { data, author, replies, user_data, user_recent_replies, loadingShow } = this.props;
        const tabText = () => {
            switch (data.tab) {
                case 'good':
                    return '分享';
                case 'share':
                    return '分享';
                case 'ask':
                    return '问答';
                case 'job':
                    return '招聘';
                case 'dev':
                    return '客户端评测'
                default:
                    return '';
            }
        }

        return <Fragment>
            <DetailBox>
                <DetailContainer>
                    <Panel>
                        <TopicHeader>
                            <div className="topic_full_title">
                                {
                                    data.top ?
                                        (<span className='put_top'>置顶</span>)
                                        :
                                        (<span className='put_top none'></span>)
                                }
                                {data.title}
                            </div>
                            <div className='changes'>
                                <span>发布于 {Utils.handleTime(moment(data.last_reply_at).fromNow())}</span>
                                <span>作者 {author.loginname}</span>
                                <span>{data.visit_count}
                                    次浏览</span>
                                <span>
                                    来自{tabText()}</span>
                            </div>
                        </TopicHeader>
                        <TopicInnner dangerouslySetInnerHTML={{ __html: data.content }}></TopicInnner>
                        <TopicReply>
                            {
                                replies.length ? <div className="header">{replies.length}条回复</div> : ''
                            }
                            {
                                replies.map((item, index) => (<ReplyItem key={item.id}>
                                    <div className="author_content">
                                        <img src={item.author.avatar_url} alt={item.author.loginname} />
                                        <div className="user_info">
                                            <span>{item.author.loginname}</span>
                                            <span className='reply_time'>{index + 1}楼 &nbsp;&nbsp; •{Utils.handleTime(moment(item.create_at).fromNow())}</span>
                                        </div>

                                        <div className="user_action">
                                            <Icon type="like" />
                                            <span>{item.ups.length}</span>
                                        </div>
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                        className="reply_content"></div>
                                </ReplyItem>))
                            }
                        </TopicReply>
                    </Panel>
                    <Sidebar>
                        <SidebarPanel>
                            <div className="title">作者</div>
                            <div className="author">
                                <img src={author.avatar_url} alt={author.loginname} />
                                <span>{author.loginname}</span>
                            </div>
                            <p className='integral'>积分: 1000</p>
                            <p className='autograph'>“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
                        </SidebarPanel>
                        <SidebarPanel>
                            <div className="title">作者其它话题</div>
                            <div className='otherTopic'>
                                《是谁杀死了谁？》
                                </div>
                        </SidebarPanel>

                        <SidebarPanel>
                            <a
                                className='AdvertisingMap'
                                href='https://yunqi.youku.com/?channel=kyz&utm_content=m_51538'>
                                <img src="https://render.alipay.com/p/s/taobaonpm_click/image_25" alt="1" />
                            </a>
                            <a
                                className='AdvertisingMap'
                                href='https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs'>
                                <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="2" />
                            </a>
                            <a className='AdvertisingMap' href='https://www.qiniu.com/cdnprice2018'>
                                <img src="//static.cnodejs.org/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O" alt="3" />
                            </a>
                            <a
                                className='AdvertisingMap'
                                href='https://www.aliyun.com/product/nodejs?ref=cnode'>
                                <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="4" />
                            </a>
                        </SidebarPanel>
                        {adList.map(ad => {
                            return (<RightCnodeGuide key={ad.id}>
                                <div style={{ fontSize: '18px' }}>{ad.content}</div>
                                <div>电话: {ad.phone}</div>
                                <div>邮箱: {ad.email}</div>
                            </RightCnodeGuide>)
                        })}
                    </Sidebar>
                </DetailContainer>
            </DetailBox>
        </Fragment>
    }
}

export default connect(
    (state) => {
        console.log(state)
        return {
            token: state.login.token,
            data: state.detail.data,
            author: state.detail.author,
            replies: state.detail.replies,
        }
    },
    (dispatch) => {
        return {
            initDetailData(id, token) {
                dispatch(actions.getDetailData(id, token))
            }
        }
    }
)(Detail)

