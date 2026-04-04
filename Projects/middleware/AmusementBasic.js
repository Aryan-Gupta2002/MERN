const express = require('express');
const app = express();

// Without middleware, Open route path

// CASE 1:
// app.get('/ride1', function(req,res){
//     res.json({
//         "msg":"Ride 1 riden successfuly"
//     })
// });

// CASE 2: Basic if else condition checker
function isOldEnough(age){
    if(age>14)
        return true;
    else 
        return false;
}
app.get('/ride1', function(req,res){
    if (isOldEnough(req.query.age)){
        res.json({
            "msg":"Ride 1 riden successfuly"
        })
    }
    else{
        res.json({
            "msg":"Age condition not met"
        })
    }
});

app.listen(3000);

// OR CASE 3: We could build a middleware function and sequentially use it with end points.
// CASE 3 is shown in "middlewareAmusement.js" file