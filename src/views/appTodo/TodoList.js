import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

import { actionToggleTodo } from '../../reduxModules/appTodo';

const TodoList = ({ todos, activeFilter, toggleTodo}) => {
    switch (activeFilter){
        case 'show_active':
            todos = todos.filter(todo => !todo.isCompleted) 
            break;
        case 'show_completed':
            todos = todos.filter(todo => todo.isCompleted)
            break;
        default:
            break;
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <Todo key={todo.index} {...todo} onClick={() => toggleTodo(index)} />
                ))}
            </ul>
            <AddTodo />
        </div>
    )
}


export default connect(
    state => ({
        todos: state.appTodo.todos,
        activeFilter: state.filter.activeFilter
    }), 
    dispatch => ({
        toggleTodo: id => dispatch(actionToggleTodo(id))
    })
)(TodoList);