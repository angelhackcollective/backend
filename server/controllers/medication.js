const Medication = require('../models/Medication')

async function findAll (req, res, next) {
    try {
        const medications = await Medication.find({ deleted: false })
        res.json(medications)
    } catch (err) {
        next(err)
    }
}

async function findOne (req, res, next) {
    try {
        const medication = await Medication.findById(req.params.id)
        res.json(medication)
    } catch (err) {
        next(err)
    }
}

async function update (req, res, next) {
    try {
        const updatedMedication = await Medication.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedMedication)
    } catch (err) {
        next(err)
    }
}

async function destroy (req, res, next) {
    try {
        const deletedMedication = await Medication.findByIdAndDelete(req.params.id, { $set: { deleted: true } })
        res.json(deletedMedication)
    } catch (err) {
        next(err)
    }
}

async function create (req, res, next) {
    try {
        const createdMedication = await Medication.create(req.body);
        res.json(createdMedication)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    findOne,
    findAll,
    update,
    destroy,
    create
};