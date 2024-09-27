// Numbers System

const score = 400
// console.log(score);

const balance = new Number(400)
// console.log(balance);          // the value would be 400

// console.log(balance.toString());        // convert into string
// console.log(balance.toString().length); // length of string
// console.log(balance.toFixed(2));     //fixed decimal

const otherNum = 123.8966
// console.log(otherNum.toPrecision(4)); 

const hundred = 1000000
// console.log(hundred.toLocaleString("en-IN"));

// ++++++++++++++++++++++++++++++++++++

// Maths

// console.log(Math);
// console.log(Math.abs(-6));   //absolute value 
//
//console.log(Math.round(4.67));   // round off the value
//console.log(Math.ceil(4.67));    // round off the value
//console.log(Math.floor(4.67));   // round off the value
// console.log(Math.min(4, 5, 6, 7, 8)); // min value

// console.log(Math.random());    // 0 to 1 random number  
console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);



const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max - min +1)) + min) // 10 to 20 random number

