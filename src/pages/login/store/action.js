import { LOGIN_ACTION,LOGOUT_ACTION } from './actionType';

export const LOGIN = (data) => {
    return {
        type: LOGIN_ACTION,
        data
    }
}

export const LOGOUT = () =>{
    return {
        type: LOGOUT_ACTION
    }
}