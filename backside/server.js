require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieparser= require("cookie-parser");
const authRouter = require("./routers/authRouter");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieparser());

//routes
app.use('/api',authRouter);
//

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to Mongo DB');
    })
    .catch(err => {
        console.error('Failed to connect to Mongo DB:', err);
        process.exit(1);
    });
app.get("/",(req,res)=>{
    res.status(500).send("hello world");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});