const express=require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

const uri = process.env.WEATHER_URI;
mongoose.connect(uri);

mongoose.connect(uri)
.then(() => {
    console.log("MongoDB database established successfully");
})
.catch((error) => {
    console.error("MongoDB connection error:", error.message);
})


app.listen(port, () => {
    console.log(`server is sucessfully running on ${port}`);
})
