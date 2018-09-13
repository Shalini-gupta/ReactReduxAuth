import React, {
  Component
} from 'react';
// import { fetchUsers, deleteUser, editUser} from '../actions/adduser';
import * as userActions from '../actions/userAction';
// import { loadUsers, deleteUser, updateUser,createUser } from '../actions/userAction';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
  bindActionCreators
} from 'redux';
import { Link } from 'react-router-dom'


import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }
  openModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }
  componentWillMount() {
    this.props.actions.loadUsers()
  }

  editUser(event, user) {
    window.location.href = `/editUser/${user._id}`
  }
  deleteUser(event, user) {
    event.preventDefault();
    this.props.actions.deleteUser(user)
  }

  render() {
        const userList = this.props.users.map((user) => {
            return (
                <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.useraddress}</td>
                    <td>
                      <button onClick={(e) => this.editUser(e, user)}>Edit User</button>
                        <button onClick={(e) => this.deleteUser(e, user)}>Delete</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Address</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {userList}
                        </tbody>
                    </table>
                </div>
                <div className={"modal-backdrop fade " + (this.state.modalIsOpen ? 'in' : '')} style={{ display: this.state.modalIsOpen ? 'block': 'none'}}></div>

                <div id="myModal" className={"modal fade " + (this.state.modalIsOpen ? 'in' : '')} style={{ display: this.state.modalIsOpen ? 'block': 'none'}} role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                      </div>
                      <div className="modal-body">
                        <p>Some text in the modal.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        );
    }
}
Home.PropTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  users: state.users,
  errors: state.errors
})



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
