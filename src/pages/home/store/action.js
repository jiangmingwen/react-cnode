import axios from 'axios';
import * as actionTypes from './actionType';
import { topic } from '../../../api';

const initHomeList = (data) => {
    return {
        type: actionTypes.INIT_HOME_DATA,
        data: data
    }
}

export const changePage = (page) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page: page
    }
}

export const loadingPresent = () => {
    return {
        type: actionTypes.CHANGE_LOADING_TRUE
    }
}

export const loadingClose = () => {
    return {
        type: actionTypes.CHANGE_LOADING_FALSE
    }
}

export const getHomeList = (id, page) => {
    return (dispatch) => {
        axios.get(`${topic}?tab=${id}&limit=40&page=${page}`).then(res => {
            const result = res.data.data;
            if (res.data.success) {
                dispatch(loadingClose());
                dispatch(initHomeList(result));
            }
        }).catch(err => {
            console.log('请求数据失败');
            dispatch(loadingClose())
        })
    }
}