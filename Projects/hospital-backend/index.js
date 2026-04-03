const express = require('express');
const app = express();

const users = [{
    name : "John",
    kidneys : [{
        healthy: false
    }]
}];

app.get('/', function(req,res){
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i = 0; i<johnKidneys.length;i++){
        if (johnKidneys[i].healthy){
            noOfHealthyKidneys += 1;
        }
    }
    const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json(
        {noOfKidneys,
        noOfUnhealthyKidneys,
        noOfHealthyKidneys}
    )
});

app.listen(3000, function(){
    console.log('Server Running');
});