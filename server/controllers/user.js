const { validationResult } = require('express-validator/check');
const bcrypt = require("bcrypt")
const User = require('../models/User')


async function get (req, res) {
    res.json("HEY")
}

async function update (req, res) {
    res.json("PUT NOT CODED FOR THIS RESOURCE")
}

async function destroy (req, res) {
    res.json("DELETE NOT CODED FOR THIS RESOURCE")
}

async function create (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let newUser = await User.create(req.body)
        newUser = newUser.toObject()
        delete newUser.password
        res.json(newUser)
    } catch (err) {
        next(err)
    }
}

async function login(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
        let foundUser = await User.findOne({ username: req.body.username })
        if (!foundUser) {
            res.json("User not found")
        }

        const passwordMatch = bcrypt.compare(req.body.password, foundUser.password)
        if (!passwordMatch) {
            res.status(401).json("Login failed")
        } 
        foundUser = foundUser.toObject()
        delete foundUser.password
        res.json(foundUser)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    get,
    update,
    destroy,
    create,
    login
};