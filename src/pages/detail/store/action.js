import * as actionTypes from './actionTypes';
import axios from 'axios';
const initDetailData = (data, author, replies) => {
    return {
        type: actionTypes.INIT_DETAIL_DATA,
        data,
        author,
        replies
    }
}



export const getDetailData = (id, token) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/topic/${id}?accesstoken=${token}`).then((res) => {
            if (res.data.success)
                dispatch(initDetailData(res.data.data,res.data.data.author,res.data.data.replies))
        })
    }
}