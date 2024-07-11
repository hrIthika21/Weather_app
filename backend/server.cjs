require('dotenv').config();
const express= require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 5002;

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

