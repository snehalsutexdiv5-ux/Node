//const express = require('express'); type => commonjs
//import expresss form "expree" type ==> module
// const express = require("express");
import express from "express";


const app = express();
//middleware : that run before all routtes
//use case: user data varification,authorization , cookies management
app.use(function(req, res, next){
     console.log("middleware is running")
     next();
})

//create route
// app.get(" fronted path", fuc)
app.get('/', function(req, res){
     res.send("snehal thummar");
});

app.get('/profile', function(req, res){
     res.send("this is profile");
});

app.get('/signup', function(req, res){
     res.render("index");
});

//error handling : always write after all routes
app.use(function (err, req, res, next) {
    res.status(500);
    res.render("error", { error: err });
});

app.listen(3000, (e)=>{
    console.log(e);
    console.log("go and check your browser http://localhost:3000/");
})

// app.listen(3000, ()=>{
//     console.log("go and check your browser http://localhost:3000/");
// })