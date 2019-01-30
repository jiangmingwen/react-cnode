import { combineReducers } from 'redux';

import { reducer as login } from '../pages/login/store';
import { reducer as home } from '../pages/home/store';
import { reducer as detail } from '../pages/detail/store';
export const reducer = combineReducers({
    login,
    home,
    detail
})