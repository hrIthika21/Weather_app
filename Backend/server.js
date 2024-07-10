const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")

require('dotenv').config();

const app=express();
const port = process.env.port || 5002;

app.use(cros());
app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is running on ${port} port`)
}
)