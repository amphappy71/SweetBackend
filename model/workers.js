const mongoose = require('mongoose');

const WorkersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    city: {
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

const P_worker = module.exports = mongoose.model('P_worker', WorkersSchema);