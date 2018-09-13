// import {
//   FETCH_USERS,
//   ADD_USER,
//   DELETE_USER,
//   UPDATE_USER
// } from '../actions/types';
import * as types from '../actions/types';


const initialState = {
  users: [],
  user_info: {},
  moduleuser: {}
}

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.FETCH_USERS:
      return Object.assign([], state, action.users)
      break

    case types.ADD_USER:
      return [
        ...state.filter(user => user._id !== action.user._id),
        Object.assign({}, action.user)
      ]
      break
    case types.DELETE_USER:
      const newState = Object.assign([], state);
      const indexOfUserToDelete = state.findIndex(user => {
        return user._id == action.user._id
      })
      newState.splice(indexOfUserToDelete, 1);
      console.log(newState);
      return newState;
      break

    case types.UPDATE_USER:
      // return [
      //   ...state.filter(user => user._id !== action.user._id),
      //   Object.assign({}, action.user)
      // ]
      return state;
      break

    case types.FETCH_USER_BY_ID:
      return action.user_info
      break

    default:
      console.log("DELETE_USERDELETE_USERDELETE_USERDELETE_USER");
      return state;
  }
}
