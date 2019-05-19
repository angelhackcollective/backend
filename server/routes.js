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


const medication = require('./controllers/medication')
r.get('/medication', medication.findAll)
r.get('/medication/:id', medication.findOne)
r.put('/medication/:id', medication.update)
r.delete('/medication/:id', medication.destroy)
r.post('/medication', medication.create)