const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const URI=process.env.URI

app.use(express.json());
app.use(express.urlencoded());

app.use('/userpersonalinfo',require('./api/routes/userPersonalInfo'))


const start=async()=>{
     
    try {
    await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
        app.listen(port,()=>{console.log('server is on '+port)})
    } catch (error) {
         console.log(error)
    }
 }
 start()
