   const express = require('express')
   const router  = express.Router();
   const { bookController} = require('../controllers')
   const {  getbook,
       getbookById,
       updateBook,
       createBook,
       removeBook} = bookController
   router.get('/', async(req,res)=> {
       const books = await getbook();
       res.send(books)
   })
   router.get('/:id', async(req,res)=>{
       const {id} = req.params
       const books = await getbookById(id)
       if(!books){
           res.status(404)
           return res.send({
               message: `No se encontro el elemento con id: ${id} :(`
           })
       }
       return res.send(books)
   })

   router.post('/', async(req,res)=>{
       const body = req.body;
       try{
           const newBook = await createBook(body)
           console.log(newBook)
           res.send(newBook)    
       } 
       catch(err) {
           console.error(err)
       }
   })

   router.put('/:id', async(req,res) =>{
       const {id} = req.params
       const body = req.body
       const books = await updateBook(id, body)
       if(!books) {
           res.status(404)
           return res.send({
               message: `No se encontro el elemento con id: ${id} :(`
           })
       }
       return res.send(books)
   })
   router.delete('/:id', async(req,res)=>{
       const {id} = req.params
       const resultado = await removeBook(id)
       res.send(resultado)
     
   })

   module.exports = router
