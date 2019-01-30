import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import moment from 'moment';
import { HomeList, PaginationContainer } from '../style';
import { Pagination } from 'antd';
import * as Utils from '../../../utils';
class HomeInner extends Component {

    componentDidMount() {

        console.log(this.props.match)
        this.props.initList(this.props.match.params.id, 1)
    }

    gotoDetail(id) {
        console.log(id)
        this.props.history.push(`/detail?id=${id}`)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.match.params.id, prevProps.match.params.id)
        if (this.props.currentPage != prevProps.currentPage || this.props.match.params.id != prevProps.match.params.id) {
            this.props.initList(this.props.match.params.id, this.props.currentPage);
            return true;
        }
    }

    handleTopic(data) {
        if (data.top) {
            data.tab = '置顶';
            data['topicClassName'] = 'topic-top';
        } else if (data.good) {
            data.tab = '精华';
            data['topicClassName'] = 'topic-good';
        } else {
            data['topicClassName'] = 'top-default';
            switch (data.tab) {
                case 'good':
                    data.tab = '精华';
                    break;
                case 'share':
                    data.tab = '分享';
                    break;
                case 'ask':
                    data.tab = '问答';
                    break;
                case 'job':
                    data.tab = '招聘';
                    break;
                case 'dev':
                    data.tab = '测试';
                    break;
            }
        }
    }

   

    render() {
        const { list } = this.props;
        return <Fragment>
            {
                list.map(item => {
                    this.handleTopic(item)
                    return (
                        <HomeList key={item.id} onClick={this.gotoDetail.bind(this,item.id)}>
                            <div className="img" >
                                <img src={item.author.avatar_url} />
                            </div>
                            <div className="count">
                                <span className="count-reply">{item.reply_count}</span>
                                <span className="count-divider"> / </span>
                                <span className="count-visit">  {item.visit_count}</span>
                            </div>
                            <div className={'topic'}>
                                <span className={item.topicClassName}> {item.tab}</span>
                            </div>
                            <div className="title">
                                <span>{item.title}</span>
                            </div>
                            <div className="time">{Utils.handleTime(moment(item.last_reply_at).fromNow())}</div>
                        </HomeList>
                    )
                })
            }
            <PaginationContainer>
                <Pagination
                    defaultCurrent={this.props.currentPage}
                    total={20000}
                    pageSize={40}
                    onChange={this.props.onPageChange}
                />
            </PaginationContainer>
        </Fragment>
    }
}

export default connect((state) => {
    console.log(state.home)
    return {
        list: state.home.list,
        currentPage: state.home.currentPage
    }
}, (dispatch) => {
    return {
        initList(id, page) {
            dispatch(actions.getHomeList(id, page))
        },
        onPageChange(page) {
            dispatch(actions.changePage(page))
        }
    }
})(HomeInner)