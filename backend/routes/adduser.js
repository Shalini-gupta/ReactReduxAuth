const express = require('express');
const router = express.Router();
const AddUser = require('../models/AddUser');

router.post('/adduser', (req, res) => {
  console.log(req.body);
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

router.put('/update/:user_id', (req, res) => {
  AddUser
    .updateOne({
      _id: req.params.user_id
    }, {
      $set: {
        username: req.body.username,
        useraddress: req.body.useraddress,
      }
    })
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
router.get('/getuser/:user_id', (req, res) => {
  AddUser
    .findOne({
      _id: req.params.user_id
    })
    .then(user => {
      res.json(user)
    });
})

router.delete('/deleteuser/:user_id', (req, res) => {
  AddUser.findOneAndDelete({
      _id: req.params.user_id
    })
    .then(user => {
      res.json(user)
    })
})



module.exports = router;
