 const bookModel = require('../model/collection');
 // Obtener todos los elementos
 const getbook = async() =>{
const book = await bookModel.find({})
//  return bookModel.find({})
return book
 }
 // Obtener un libro 
 const getbookById = async(_id) => {
   
     const newBook = new bookModel(body)
     await newBook.save()
     return newBook
 }
 //Crear 
 const createBook = async(body) =>{
   
     const newBook = new bookModel(body)
     await newBook.save()
     return newBook
 }
 // Actualizar  
 const updateBook = async(_id, updateObject) =>{
    
     return bookModel.findOneAndUpdate({_id}, updateObject, {
         // Si es upsert es verdadero, el documento de la colección existe y si no es verdadero, entonces no hace nada.
         upsert: false,
         // Si new existe, se devuelve el documento modificado después de la actualización en lugar del original; si es falso, se devuelve el documento original.
         new: true
     })
 }
 const removeBook = async(_id) =>{
     return bookModel.findOneAndDelete({_id})
 }
 module.exports = {
     getbook,
     getbookById,
     createBook,
     updateBook,
     removeBook
 }

