const fs = require("fs");

function print(err,data){
    console.log(data);    
}

fs.readFile("a.txt", "utf-8",print);

fs.readFile("b.txt", "utf-8",print);

setTimeout(()=>{
    console.log("Hello");    
},0)

console.log("Done");

// create the promisified version of fs.readFile, fs.writeFile, cleanFile

function readTheFile(resolve){
    setTimeout(resolve,3000)
}

function readFile(fileName){
    return new Promise(readTheFile)
}

const p = fs.readFile('a.txt')

function callback(contents){
    console.log(contents);
    
}
p.then(callback)