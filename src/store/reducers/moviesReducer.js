import TYPES from '../types';

const initialState = {
    movies: '',
};

// reducer handler update movies state with new action data
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.MOVIES:
            return {...state, movies: action.payload};
        default:
            return state;
    }
};