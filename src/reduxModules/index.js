import { combineReducers } from 'redux';

import appTodo from './appTodo';
import filter from './common/filter';


export default combineReducers({
    appTodo,
    filter
})
