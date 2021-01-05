const express = require('express');
const router = express.Router();

//models

const User = require('../models/users');

//get a list of users from the db


//add a new user to db

router.post('/users', (req,res) =>{
    User.create(req,body)
    .then((User) => {
        res.send(user);
    })
    .catch((err) => {
        res.send ({
            error: err.message
        })
    })
})

//Update users

//Delete users
