import React, { Component } from 'react';
import { fetchUsers, deleteUser, editUser} from '../actions/adduser';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
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
        this.setState ({
            modalIsOpen: true
        })
    }
    componentWillMount () {
        this.props.fetchUsers()
    }
    render() { 
        const userList = this.props.moduleusers.map((user) => {
            return (
                <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.useraddress}</td>
                    <td>
                        <button onClick={this.openModal}>Edit</button>
                        <button onClick={deleteUser(user._id)}>Delete</button>
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
            </div>          
        );
    }
}

Home.PropTypes = {
    fetchUsers: PropTypes.func.isRequired,
    moduleusers: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    moduleusers: state.useroption.moduleusers,
    errors: state.errors
})

    // const mapDispatchToProps = dispatch => ({
    //     toggleTodo: id => dispatch(toggleTodo(id))
    // });


export default connect(mapStateToProps, { fetchUsers })(Home)
