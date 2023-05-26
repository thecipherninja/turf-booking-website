const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://thecipherninja:ZXa2JiGe3VAZrea9@cluster0.xjdqogx.mongodb.net/turfdata?retryWrites=true&w=majority");


const express = require("express");
const app = express();

//User routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

app.listen(5002, function(){
    console.log("Connected to port 5002");
});

