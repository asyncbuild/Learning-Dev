const express = require("express")

const app = express()
let requestCount = 0;
function middlewareLog(req,res,next){
    console.log(req.url);
    console.log(req.method);
    console.log(new Date().toLocaleString());
    requestCount++;
    next();
}

function getCount(req,res){
    res.send({
        count : requestCount
    })
}

app.use(middlewareLog)
function addFunc(req,res){
    const num1 = parseInt(req.query.a);
    const num2 = parseInt(req.query.b);
    res.status(200).send({
        result : num1+num2
    })
}

function subFunc(req,res){
    const num1 = parseInt(req.query.a);
    const num2 = parseInt(req.query.b);
    res.status(200).send({
        result : num1-num2
    })
}

app.get('/add',addFunc)
app.get('/subtract',subFunc)
app.get('/count',getCount)


app.listen(3000)