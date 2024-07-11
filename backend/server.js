const express=require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 5002;

app.use(cors());
app.use(express.json());

const uri = process.env.WEATHER_URI;
mongoose.connect(uri);

mongoose.connection.once('open',()=>{
    console.log("MongoDB database establised successfully");
})

app.listen(port,()=>{
    console.log(`server is sucessfully running on ${port}`);
});