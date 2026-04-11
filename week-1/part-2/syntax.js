// // assignment 1
// const favColour = 'Blue';
// let age = 22;
// let isPizza = true;
// console.log(favColour);
// console.log(age);
// console.log(isPizza);

// // assignment 2.1
// function sum(a,b){
//     return a+b;
// }
// let totalSum = sum("1","2")
// console.log(totalSum);

// assignment 2.2
// function canVote(age){
//     if(age>18){
//         console.log(" U r eligible to vote");
//     }
//     console.log(" U r not eligible to vote");
// }

// console.log(canVote(21));

//assignment 3
// const num = 11;
// if(num%2 === 0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }

// function sum(number){
//     let totalSum = 0;
//     for(let i=0;i<=number;i++){     
//         totalSum += i;     
//     }
//     return totalSum;
// }

// console.log(sum(10));

// let user = {
//     name:"Deepesh",
//     age:22
// }

// function greeting(inputUser){
//     console.log( 'Hello ' ,inputUser.name,' age ',inputUser.age);
// }
// greeting(user)

// let newUSer = {
//     name:"Someone",
//     age:15,
//     gender:""
// }

// function newGreeting(inputUser){
//     if(inputUser.gender === 'Male'){
//         console.log( 'Hello MR.' ,inputUser.name,' age ',inputUser.age);
//         canVote(inputUser.age)
//     }else if(inputUser.gender === 'Female'){
//         console.log( 'Hello Mrs.' ,inputUser.name,' age ',inputUser.age);
//         canVote(inputUser.age)
//     }else{
//         console.log( 'Hello Others.' ,inputUser.name,' age ',inputUser.age);
//         canVote(inputUser.age)
//     }
// }
// newGreeting(newUSer)

// function filterMethod(arr){
//     return arr.filter(nums => nums%2 ==! 0 )
// }

// const numArray = [1,2,3,4,5,6,7,8,9]
// console.log(filterMethod(numArray));

// function assignment(inputUsers){
//     let newArr = [];
//     for(let i=0;i<inputUsers.length;i++){
//         if(inputUsers[i].age > 18){
//             newArr.push(inputUsers[i]);
//         }
//     }
//     return newArr;
// }


// const users = [
//     {
//         name:"Deepesh",
//         age:22
//     },
//     {
//         name:"Sai",
//         age:12
//     },
//     {
//         name:"Kumar",
//         age:19
//     }
// ]

// console.log(assignment(users));

// const user1 = [
//     {
// 	name: "harkirat",
// 	age: 19,
//     gender:'Male',
// 	address: {
// 		city: "Delhi",
// 		country: "India",
// 		address: "1122 DLF"
// 	}
// },{
// 	name: "Deepesh",
// 	age: 12,
//     gender:'Male',
// 	address: {
// 		city: "Delhi",
// 		country: "India",
// 		address: "1122 DLF"
// 	}
// },{
// 	name: "Kumari",
// 	age: 19,
//     gender:'Female',
// 	address: {
// 		city: "Delhi",
// 		country: "India",
// 		address: "1122 DLF"
// 	}
// }
// ]

// function lastAssignment(inputUser){
//     for(let i=0;i<inputUser.length;i++){
//         if(inputUser[i].age > 18 && inputUser[i].gender === "Male"){
//             console.log(inputUser[i].name);            
//         }
//     }
// }
// lastAssignment(user1)
