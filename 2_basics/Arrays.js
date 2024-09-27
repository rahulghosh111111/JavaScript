const myArr = [1,2,3,22,5]
const Heros = ["Superman", "Batman", "Spiderman"]
const arr2 = new Array(3,4,5,6,7)  // array constructor
// console.log(myArr[0])
// console.log(Heros[0])


//Array Methods
// ________________________________________________________________________________________________________________
myArr.push(4)       // add element at end
myArr.pop(22)      // remove element at end
myArr.shift(0)     // remove element at start
myArr.unshift(0)   // add element at start
// console.log(myArr)
// console.log(myArr.includes(4));  // true or false it means element is present or not
// console.log(myArr.indexOf(2));   // index of element in array




// const newArr = myArr.join()   // make it string format through join
// console.log(myArr);      // [1, 2, 3, 4] in array format
// console.log(newArr)    // 1,2,3,4 in string format



const myn1 = myArr.slice(1,3)    // 1st index to 3rd index (3rd index not included)
// console.log(myn1)

const myn2 = myArr.splice(1,3)  // 1st index to 2nd index (2nd index not included)
// console.log(myn2)


