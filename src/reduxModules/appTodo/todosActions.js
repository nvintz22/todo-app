import { ADD_TODO, TOGGLE_TODO } from './index';

export const actionAddTodo = text => ({
    type: ADD_TODO,
    text
})

export const actionToggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})