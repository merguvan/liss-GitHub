const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const URI=process.env.URI

app.get('/', (req, res) => res.send('Hello World!'))


const start=async()=>{
     
    try {
    await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
        app.listen(port,()=>{console.log('all is okay '+port)})
    } catch (error) {
         console.log(error)
    }
 }
 start()
