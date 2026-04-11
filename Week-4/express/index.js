const express = require("express")
const app = express()
app.use(express.json())
var users = [{
    name:"John",
    kidneys:[{
        healthy:true
    }]
}]

app.get('/',function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;
    let numberOfHealthKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnkidneys[i].healthy){
            numberOfHealthKidneys = numberOfHealthKidneys+1;
        }
    }
    let unhealthyKidneys = numberOfKidneys-numberOfHealthKidneys;
    res.json({
        johnkidneys,
        numberOfKidneys,
        numberOfHealthKidneys,
        unhealthyKidneys
    })
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.send("Done")
})

app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.send("Done")
})

app.delete('/',function(req,res){
    
})

app.listen(3000)