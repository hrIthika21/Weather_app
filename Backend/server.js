const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")

require('dotenv').config();

const app=express();
const port = process.env.port || 5002;

app.use(cors());
app.use(express.json());

const uri=process.env.WEATHER_URI;
mongoose.connect(uri,{useNewUrlParser : true, useCreateIndex :true});

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("Mongoose Database connection sucessful");
})

app.listen(port, () =>{
    console.log(`Server is running on ${port} port`)
}
)