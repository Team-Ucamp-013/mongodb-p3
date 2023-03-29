const mongoose = require('mongoose')
const { Schema } = mongoose

// const bookSchema = new Schema({
//     titulo: {
//         type: String,
//         required: true
//     },
//     autor: {
//         type: String,
//         required: true
//     },
//     año: {
//         type: Number,
//         required: false
//     }
// })

const bookSchema = new Schema({
    titulo:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    año:{
        type:Number,
        required:true
    }
})

const bookModel = mongoose.model('books', bookSchema)

module.exports = bookModel

