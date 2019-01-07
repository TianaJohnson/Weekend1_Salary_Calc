const express = require('express');
const router = express.Router();

let employeeArray = [];

//get router 
router.get('/employee-info', (req, res) => {
    res.send(employeeArray);
});

//post router
router.post('/employee-info', (req, res) => {
    console.log(req.body); // <- our 'data' passed from AJAX
    employeeArray.push(req.body);
    //confirmation to the client that we got the item
    res.sendStatus(201); 
});



module.export = router;