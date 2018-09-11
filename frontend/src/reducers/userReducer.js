import { FETCH_USERS, ADD_USER, DELETE_USER } from '../actions/types';

const initialState = {
    moduleusers: [],
    moduleuser: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                moduleusers: action.payload
            }
        case ADD_USER: 
            return {
                ...state,
                moduleuser: action.payload
            } 
        case DELETE_USER: 
            return {
                ...state,
                moduleuser: action.payload
            }     
        default: 
            return state;
    }
}