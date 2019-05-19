let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId

let medicationSchema = new Schema({
      name: String,
      type: String,
      effort: { type: String, default: "medium"}, // types = low/medium/high
      symptoms: [
            { type: ObjectId, ref: 'Symptoms' }
      ]
})

module.exports = mongoose.model('Medication', medicationSchema)