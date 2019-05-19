const express = require('express')
const r = express.Router()
module.exports = r
const { check } = require('express-validator/check')

const user = require('./controllers/user')
r.get('/user', user.get)
r.put('/user/:id', user.update)
r.delete('/user/:id', user.destroy)
r.post('/user', [
    check('username').isLength({ min: 3 }),
    check('password').isLength({ min: 8 })
  ], user.create)
r.post("/login", [
    check('username').isLength({ min: 3 }),
    check('password').isLength({ min: 8 })
],user.login)
