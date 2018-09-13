// import axios from 'axios';
// import { GET_ERRORS, FETCH_USERS, ADD_USER, DELETE_USER} from '../actions/types';
//
// export const addUser = (user) => dispatch => {
//     axios.post('/api/users/adduser', user)
//             .then(res => res.json())
//             .then(user => {
//                 dispatch({
//                     type: ADD_USER,
//                     payload: user
//                 });
//             })
// }
//
// export const fetchUsers = () => dispatch => {
//     fetch('/api/users/getuser')
//     .then(res => res.json())
//     .then(users => {
//         dispatch({
//             type: FETCH_USERS,
//             payload: users
//         });
//     });
// }
//
// export const deleteUser = (id) => dispatch => {
//     axios.delete('/api/users/deleteuser', { params: { id: id } })
//         .then(res => {
//             // return res;
//             dispatch({
//                 type: DELETE_USER,
//                 payload: id
//             });
//         })
// }
//
// export const editUser = (user) => dispatch => {
//     console.log('edit')
// }
//
// export const changeModal = (payload) => {
//     return {
//       type: 'CHANGE_MODAL',
//       payload,
//     }
//   }



  class UsersApi {
    static getAllUsers() {
      return fetch('/api/users/getuser').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static updateUser(user) {
      console.log(user);
      const request = new Request(`/api/users/update/${user._id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
      });


      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static createUser(user) {
      const request = new Request('/api/users/adduser', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
      });


      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static deleteUser(user) {
      const request = new Request(`/api/users/deleteuser/${user._id}`, {
        method: 'DELETE'
      });
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        console.log(error);
        return error;
      });
    }

    static fatchUserById(id){
      const request = new Request(`/api/users/getuser/${id}`, {
        method: 'GET'
      });
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        console.log(error);
        return error;
      });
    }
  }

  export default UsersApi;
