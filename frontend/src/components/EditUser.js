import React, {
  Component
} from 'react';
import {
  updateUser,
  fatchUserById
} from '../actions/userAction';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';

class EditUser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      username: '',
      useraddress: '',
      errors: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.fatchUserById(this.props.match.params.user_id)

  }

  handleInputChange(e) {
    this.props.user_info[e.target.name] = e.target.value
    // console.log(this.props);
    // this.props.user_info[e.target.name] = e.target.value
    // this.props.change('user_info', {
    //   [e.target.name]: e.target.value
    // })
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      _id: this.user_id.value,
      username: this.username.value,
      useraddress: this.useraddress.value
    }
    console.log(user);
    this.props.updateUser(user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    return (
      <div className="container" style={{marginTop: '50px', width: '700px' }}>
        <h2 style={{marginBottom: '40px' }}> Update User
          </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="User name" name="username" className="form-control" ref={(input)=> this.username = input } defaultValue = { this.props.user_info.username || '' } onChange = { this.handleInputChange } />
            <input type="hidden" placeholder="_id" name="_id" className="form-control" ref={(input)=> this.user_id = input } defaultValue = { this.props.user_info._id || '' } onChange = { this.handleInputChange } />
          </div>
          <div className="form-group">
            <input type="text" placeholder="User address" name="useraddress" className="form-control" ref={(input)=> this.useraddress = input } defaultValue = { this.props.user_info.useraddress || '' } onChange = { this.handleInputChange } />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Update User
            </button>
          </div>
        </form>
      </div>
    )
  }


}

EditUser.PropTypes = {
  actions: PropTypes.object.isRequired,
  user_info: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return ({
    user_info: state.users,
    errors: state.errors
  })
}


export default connect(mapStateToProps, {
  updateUser,
  fatchUserById
})(EditUser)
