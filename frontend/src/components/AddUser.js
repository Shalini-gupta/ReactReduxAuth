import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/adduser';

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            useraddress: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            useraddress: this.state.useraddress,
        }
        this.props.addUser(user);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Add User</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="User name"
                    name="username"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="User address"
                    name="useraddress"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Add User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { addUser })(AddUser)