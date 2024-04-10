const express = require("express");
const sqlite3 = require('sqlite3').verbose(); 
const fs = require("fs");
const csv = require("csv-parser");

const app = express();
const db = new sqlite3.Database('database.db');
const port = 3000;

db.serialize(() => {
    db.run("CREATE TABLE worldWonders (Name STRING, Latitude FLOAT ");

    //import date from table worldWonders from csv names WondersOfWorld.csv
    db.run(".import ./WondersOfWorld.csv INTO TABLE WorldWonders FIELDS TERMINATED ")
})

const logger = (req, res, next) => {
    console.log(new Date().toLocaleString(), req.method, req.url);
    next();
}

app.use(logger);

// ------ 

app.post("/", (req, res) => {
    res.send("post request");
})

//Create
// app.put("/", (req, res) => {
//     res.send("put request");
// })

//Listen
app.listen(port, () => {
    console.log('Server is running on port localhost:${port}');
} )