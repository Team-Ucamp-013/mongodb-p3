const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('./db/mongodb');




app.get('/', (req,res)=>{
    res.send('Servidor vivo')
})


const PORT = 4003;
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})