const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const routerUrl = require('./Router/Router') // import router js file

// middleware
app.use(express.json());
app.use(cors());
app.use("/app",routerUrl);

if(mongoose.connect('mongodb://127.0.0.1:27017/Student-management'))
{
    console.log('Database is Connected')
}

app.listen(4000, ()=>
    {
        console.log('server is connected')
    })