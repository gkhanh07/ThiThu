const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionsSchema = new Schema({
    sessionName: {
        type: String,
        required: true,
    },
    sectionDescription: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    isMaintask: {
        type: Boolean,
        default: false,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
        required: true,
    }
},
    { timestamps: true }
);

const Sections = mongoose.model('Sections', sectionsSchema);
module.exports = Sections;

