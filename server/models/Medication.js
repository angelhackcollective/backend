let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId

let medicationSchema = new Schema({
      name: { type: String, required: true, unique: true },
      type: { type: String, required: true },
      effort: { type: String, default: "medium", required: true }, // types = low/medium/high
      symptoms: [
            { type: ObjectId, ref: 'Symptoms' }
      ],
      deleted: { type: Boolean, default: false },
      efficacy: { type: Number, required: true }
})

module.exports = mongoose.model('Medication', medicationSchema)