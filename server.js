const express = require('express');
const connectDB = require('./db');

const app = express();

app.use(express.json());

connectDB('mongodb://localhost:27017/attendance-db').then(() => {
    console.log("Database Connected!");
    app.listen(4000, () => {
        console.log("Server is listening on port 4000");
    })
})