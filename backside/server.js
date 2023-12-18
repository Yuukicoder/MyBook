require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieparser = require("cookies-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieparser());

const port = proces.env.PORT || 5000;
const URL = process.env.MONGO_URI;

mongoose.connect(URL,{
    useCreateIndex: true,useFindAndModify: false,
    useNewUrlParser: true, useUnifiedTopology:true,
},err =>{
    if(err) throw err;
    console.log('db is connected')
})


app.get("/",(req,res)=>{
    res.status(500).send("Hello world");
});
// const port = 5000;
app.listen(port,() =>{
    console.log('Server is lestining ........');
});