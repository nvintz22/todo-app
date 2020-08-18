import { SET_VISIBILITY_FILTERS } from './index';


const initialState = {
    filters: [
        {key: 'show_all', text: 'All'},
        {key: 'show_active', text: 'Active'},
        {key: 'show_completed', text: 'Complete'},
    ],
    activeFilter: 'show_all'
}


const filter = (state = initialState, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTERS: 
            return {
                ...state,
                activeFilter: action.filter
            }
        default:
            return state;
    }
}

export default filter;