const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    address: String,
    borndate: String,
    job_position: String,
});

module.exports = mongoose.model('Employee', employeeSchema);