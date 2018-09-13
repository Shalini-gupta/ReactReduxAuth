// import axios from 'axios';
// import { GET_ERRORS, FETCH_USERS, ADD_USER, DELETE_USER} from './types';
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
