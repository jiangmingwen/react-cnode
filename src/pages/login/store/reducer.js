import { LOGIN_ACTION, LOGOUT_ACTION } from './actionType';

const DefaultState = {
    token: localStorage.getItem("UerInfo") || ''
}

const reducer = (state = DefaultState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            localStorage.setItem("UerInfo", action.data);
            return { ...state, ...{ token: action.data } }
        case LOGOUT_ACTION:
            localStorage.removeItem("UerInfo");
            return { ...state, ...{ token: '' } }
        default:
            return state;
    }
}

export default reducer;