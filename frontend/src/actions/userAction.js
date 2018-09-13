import * as types from './types';
import userApi from '../api/user';




export function loadUsersSuccess(users) {
  return {
    type: types.FETCH_USERS,
    users
  };
}

export function updateUserSuccess(user) {
  return {
    type: types.UPDATE_USER,
    user
  }
}

export function createUserSuccess(user) {
  return {
    type: types.ADD_USER,
    user
  }
}

export function deleteUserSuccess(user) {
  return {
    type: types.DELETE_USER,
    user
  }
}
export function FatchUserByIdSuccess(user_info) {
  return {
    type: types.FETCH_USER_BY_ID,
    user_info
  }
}

export function loadUsers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw (error);
    });
  };
}
export function fatchUserById(id) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return userApi.fatchUserById(id).then(user => {
      dispatch(FatchUserByIdSuccess(user));
    }).catch(error => {
      throw (error);
    });
  };
}

export function updateUser(user) {
  return function(dispatch) {
    return userApi.updateUser(user).then(responseUser => {
      dispatch(updateUserSuccess(responseUser));
    }).catch(error => {
      throw (error);
    });
  };
}

export function createUser(user) {
  return function(dispatch) {
    return userApi.createUser(user).then(responseUser => {
      console.log(responseUser);
      dispatch(createUserSuccess(responseUser));
      return responseUser;
    }).catch(error => {
      throw (error);
    });
  };
}

export function deleteUser(user) {
  return function(dispatch) {
    return userApi.deleteUser(user).then(() => {
      console.log(`Deleted ${user._id}`)
      console.log(deleteUserSuccess(user));
      dispatch(deleteUserSuccess(user));
      return;
    }).catch(error => {
      console.log(error);
      throw(error);
    })
  }
}

// export function deleteUser(user) {
//   return function(dispatch)
//   return userApi.deleteUser(user).then(() => {
//     console.log(`Deleted ${user._id}`)
//     dispatch(deleteUserSuccess(user));
//     return;
//   }).catch(error => {
//     throw (error);
//   })
// }
// }
