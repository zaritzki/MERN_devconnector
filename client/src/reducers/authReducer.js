import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const intialState = {
    isAuthenticated: false,
    user: {},
    zar: 'Mabuhay!'
}

export default function(state = intialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER: 
            return {
                ...state, // the current state
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
};