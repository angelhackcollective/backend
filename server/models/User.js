let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId

let userSchema = new Schema({
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema)