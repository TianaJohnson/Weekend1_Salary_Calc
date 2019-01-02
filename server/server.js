const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000; 

//employee array
let employeeArray = [];

// Finds the data and makes it easy to access in our POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


app.get('/employee-info', (req, res) => {
    res.send(employeeArray);
});


app.post('/employee-info', (req, res) => {
    console.log(req.body); // <- our 'data' passed from AJAX
    employeeArray.push(req.body);
    //confirmation to the client that we got the item
    res.sendStatus(201); 
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});