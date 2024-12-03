const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const routerUrl = require('./Router/Router') // import router js file

// middleware
app.use(express.json());
app.use(cors());
app.use("/app",routerUrl);

if(mongoose.connect('mongodb+srv://kvallarasu2003:Ammaakka@16@cluster0.izndm.mongodb.net/Student-management?retryWrites=true&w=majority&appName=Cluster0'))
{
    console.log('Database is Connected')
}

app.listen(4000, ()=>
    {
        console.log('server is connected')
    })
