const express = require("express");
const App = express();
const mongoose = require("mongoose");
const sturoute = require("./Routes/StuRoutes")

const  cors = require("cors")
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/jwt12pm").then(()=>{
    console.log("Data Base Connected")
})

App.use(bodyParser.urlencoded({ extended: false }))
App.use(bodyParser.json())

App.use(cors())
App.use("/user",sturoute)



App.listen(8005,()=>{
    console.log("Server Run on 8005");
})