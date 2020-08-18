import todos from './todos';

// Export Action Type
export const ADD_TODO = '[TODO] ADD_TODO';
export const TOGGLE_TODO = '[TODO] TOGGLE_TODO';

// Export Action Creators
export {
    actionAddTodo,
    actionToggleTodo
} from './todosActions';


// Export TODO Reducers
export default todos;