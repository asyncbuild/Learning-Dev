function prob1(firstName : string){
    console.log(`Hello ${firstName}`);
    
}

//prob1("asyncbuild")

function prob2(num1 : number, num2 : number) : number{
    return num1 + num2;
}

// console.log(prob2(5, 10));

function delayedCall(fn : () => void){
    setTimeout(fn, 2000);
}

// delayedCall(function(){
//     console.log("This is a delayed call");
// })

