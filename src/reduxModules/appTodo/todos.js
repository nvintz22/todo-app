import { ADD_TODO, TOGGLE_TODO } from './index';


const initialState = {
    todos: []
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        isCompleted: false
                    }
                ]
            }

        case TOGGLE_TODO: 
            const { todos } = state;
            const todo = todos[action.id]
            todo.isCompleted = !todo.isCompleted;

            todos[action.id] = todo;
            return {
                ...state,
                todos: [
                    ...todos
                ]
            }
        default: 
            return state;
    }
}

export default todos;