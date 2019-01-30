import * as actionTypes from './actionTypes';

const defaultState = {
    data: {},
    author: {},
    replies: [],

}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INIT_DETAIL_DATA:
            return { ...state, ...{ data: action.data }, ...{ author: action.author }, ...{ replies: action.replies } }
        default:
            return state;
    }
}