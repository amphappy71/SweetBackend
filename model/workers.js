const mongoose = require('mongoose');

const WorkerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

const Worker = module.exports = mongoose.model('Worker', WorkerSchema);