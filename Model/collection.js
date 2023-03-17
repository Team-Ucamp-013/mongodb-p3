const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    año : {
        type: Number,
        required: false
    }
})

const bookModel = mongoose.model('collection', bookSchema)

model.exports = bookModel

