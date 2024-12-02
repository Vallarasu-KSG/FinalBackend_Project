const express = require('express');

const Router = express.Router();  // => this is router connect middleware

const BackendRegitserCopy= require('../Page/BackendRegister');

Router.post("/Invoice",(req, res)=>
    {
        const reg = new BackendRegitserCopy({

            firstName:req.body.firstName,  // dullname (front end name=fullname copypast)
            lastName:req.body.lastName,
            gender:req.body.gender,
            age:req.body.age,
            dateOfBirth:req.body.dateOfBirth,
            mobile:req.body.mobile,
            email:req.body.email,    
            course:req.body.course,   
            batch:req.body.batch,    
            admissionDate:req.body.admissionDate,
            fees:req.body.fees,

        })
        reg.save().then(date => 
            {
                res.json(data);
                console.log('Data Added Successful');
            }).catch(error => 
                {
                    res.json(error);
                })
    })



module.exports=Router;   // function calling