const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamp: true }
)

const Members = mongoose.model('Members', membersSchema)
module.exports = Members;