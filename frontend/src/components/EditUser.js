import React, { Component } from 'react';

class EditUser extends React.Component {
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

export default EditUser;