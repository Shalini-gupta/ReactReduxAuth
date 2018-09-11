const express = require('express');
const router = express.Router();
const AddUser = require('../models/AddUser');

router.post('/adduser', (req, res) => {
    const newUser = new AddUser({
        username: req.body.username,
        useraddress: req.body.useraddress,
    });
    newUser
    .save()
    .then(user => {
        res.json(user)
    }); 
})

router.get('/getuser', (req, res) => {
    AddUser
    .find({})
    .then(user => {
        res.json(user)
    }); 
})

router.delete('/deleteuser', (req, res) => {
    AddUser.findOneAndDelete({_id: req.query.id})
    .then(user => {
        res.json(user)
    })  
})



module.exports = router;