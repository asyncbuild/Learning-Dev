// class Rectangle {
//    constructor(width, height, color) {
// 	    this.width = width;
// 	    this.height = height;
// 	    this.color = color; 
//    }
   
//    area() {
// 	    const area = this.width * this.height;
// 		return area;
//    }
   
//    paint() {
// 		console.log(`Painting with color ${this.color}`);
//    }
// }

// const rect = new Rectangle(2, 4,"Blue")
// const area = rect.area();
// rect.paint();
// console.log(area)

// const now = new Date(); // Current date and time
// console.log(now.toISOString()); // Outputs the date in ISO format

// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));
// console.log(map.get('age'));

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)

function random(resolve){
    // resolve();
    setTimeout(resolve,3000);
}

let p = new Promise(random) // promise is supposed to return us something



// using the eventua value returned by the promise
function callback(){
    console.log("promise succeded");
}

p.then(callback)

//
