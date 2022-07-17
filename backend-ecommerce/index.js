const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/products", {}, ()=>{
    console.log("Connection succesful to database");
})
app.get('/', function (req, res) {
    res.send('Hello World');
    console.log("Safdar Here")
})
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 })

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));