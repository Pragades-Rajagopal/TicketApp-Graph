const express = require('express');
const bodyParser = require('body-parser');
const DB = require("../database/db_connection");

const port = 9192;
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
    res.send("<h1>Check</h1>");
});

app.get("/ticketapi", async (req, res) => {
    
    const data = await DB.data();
    // console.log(data);

    res.status(200).json(data);
});

app.listen(port, () => {console.log(`Server is running in ${port}`)});
