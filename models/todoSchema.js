const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('todos', todoSchema);