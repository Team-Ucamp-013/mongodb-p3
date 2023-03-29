const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./apis');
app.use(cors());
require('./db/mongodb');

app.use(express.json())
app.use(router)



app.get('/', (req,res)=>{
    res.send('Servidor vivo')
})


const PORT = 4003;
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})