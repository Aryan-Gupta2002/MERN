const express = require('express');
const app = express();

// CASE 3: Using Middleware function

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>14)
        next();
    else{
        res.json({
            "msg":"Age condition not met"
        })
    }
}

// An Express application is essentially a series of middleware function calls.
// Middleware works in a series , for this case :

// (/ride1 endpoint) --> (isOldEnoughMiddleware) --> (function next middleware)

app.get('/ride1', isOldEnoughMiddleware, function(req,res){
    res.json({
            "msg":"Ride 1 riden successfuly"
        })
})
app.get('/ride2', isOldEnoughMiddleware, function(req,res){
    res.json({
            "msg":"Ride 2 riden successfuly"
        })
})

app.listen(3000);