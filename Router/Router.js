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

// GET route to retrieve all student records
Router.get("/getInvoice", async (req, res) => {
    try {
        const data = await BackendRegitserCopy.find(); // Retrieve all records
        res.status(200).json(data); // Respond with the retrieved data
        console.log("Data fetched successfully");
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});

// DELETE route to delete a specific student record
Router.delete("/Invoice/:id", async (req, res) => {
    try {
        const id = req.params.id; // Get ID from request parameters
        const deletedRecord = await BackendRegitserCopy.findByIdAndDelete(id); // Delete record by ID
        if (!deletedRecord) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.status(200).json({ message: "Record deleted successfully", deletedRecord });
        console.log("Record deleted successfully");
    } catch (error) {
        console.error("Error deleting record:", error);
        res.status(500).json({ message: "Error deleting record", error: error.message });
    }
});

module.exports=Router;   // function calling