// "use strict" // treat all js code as newer versio

// // alart(2+9)  // we are using node js not browsing

// // console.log(3+3);
// // console.log("Rahul");


// let name = "rahul"
// let age = 22
// let isLoggedin = false

// //bigint
// //string
// //boolean
// // null = standalone value   (represent of empty value)
// //undefined
// //symbol => unique


// //object

// // console.log(typeof "Rahul");  // what type of this datatype
// // console.log(typeof null);




// //***************************Summary****************************/

// // premitive
// // 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


// const score = 100
// const scoreValue=100.3


// const isloggedin= false

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 2124352352535n

// console.log(typeof bigNumber);




// //Reference (Non premitive)
// // Arrays , Objects , Functions







//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitives) , Heap (Non primitives)

let myYoutube = "ToxicMines"
let anothername = myYoutube

anothername = "Rahul"
console.log(myYoutube)
console.log(anothername)


let userOne = {
    name : "rahul",
    age : 22,
    email : "rahul@gmail.com",
    upi : "rahul@upi"
}

let userTwo=userOne

userTwo.name="Rahul"
console.log(userOne)
console.log(userTwo)