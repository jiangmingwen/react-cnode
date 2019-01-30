import * as actionTypes from './actionType';


const defaultState = {
    list: [],
    loading: true,
    currentPage: 1
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOADING_FALSE:
            return { ...state, ...{ loading: false } }
        case actionTypes.CHANGE_LOADING_TRUE:
            return { ...state, ...{ loading: true } }
        case actionTypes.CHANGE_PAGE:
            return { ...state, ...{ currentPage: action.page } }
        case actionTypes.INIT_HOME_DATA:
            return { ...state, ...{ list: action.data } }
        default:
            return state;
    }
}