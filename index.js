const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://theturfdevteam:devteam987@cluster0.iuracqj.mongodb.net/turfdata4?retryWrites=true&w=majority");

const express = require("express");
const app = express();

//User routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

app.listen(5002, function(){
    console.log("Connected to port 5002");
});

