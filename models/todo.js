const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    todo: {
        type: String, 
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = new mongoose.model("todo", Schema);