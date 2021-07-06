const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const URI=process.env.URI

app.use(express.json());
app.use(express.urlencoded());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(express.static("public"));

app.use('/user',require('./api/routes/user'))



const start=async()=>{
     
    try {
    await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
        app.listen(port,()=>{console.log('Listening    on '+port)})
    } catch (error) {
         console.log(error)
    }
 }
 start()
