const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const routerUrl = require('./Router/Router') // import router js file

// middleware
app.use(express.json());
app.use(cors());
app.use("/app",routerUrl);

mongoose.connect('mongodb://localhost:27017/Student-management', {
    useNewUrlParser: true,       // Avoid deprecation warning for URL parsing
    useUnifiedTopology: true     // Avoid deprecation warning for server discovery and monitoring
})
    .then(() => {
        console.log('Database is Connected');
    })
    .catch((error) => {
        console.error('Database Connection Failed:', error.message);
    });

app.listen(4000, ()=>
    {
        console.log('server is connected')
    })
