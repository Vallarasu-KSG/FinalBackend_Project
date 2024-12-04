const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// const UserModel = require('./Model/Users');

const routerUrl = require('./Router/Router') // import router js file

// middleware
app.use(express.json());
app.use(cors());
app.use("/app",routerUrl);

if(mongoose.connect('mongodb+srv://kvallarasu2003:Ammaakka%4016@cluster0.izndm.mongodb.net/student-managements?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log('Database is Connected')
    }

app.listen(4010, ()=>
    {
        console.log('server is connected')
    })
