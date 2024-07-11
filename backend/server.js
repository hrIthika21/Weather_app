

require('dotenv').config();
const express= require('express');
const cors = require('cors');
const mongoose=require('mongoose')

const app = express();
const port = process.env.port || 5002;

app.use(cors());
app.use(express.json());

const uri=process.env.WEATHER_URI;
mongoose.connect(uri);
const Connection=mongoose.connection;
Connection.once('open',()=>{
    console.log("MongoDB database connection establised sucessfully");
})

app.listen(port,()=>{console.log(`Server is running on ${port}`)})

