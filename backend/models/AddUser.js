const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addUserSchema = new Schema({
    username: {
        type: String,
    },
    useraddress: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const AddUser = mongoose.model('addusers', addUserSchema);

module.exports = AddUser;