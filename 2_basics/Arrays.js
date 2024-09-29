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


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvel_heros = ["thor", "hulk", "ironman"]
const dc_heros = ["batman", "superman", "wonderwoman"]

// marvel_heros.push(dc_heros)     // 2D array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const all_heros =marvel_heros.concat(dc_heros)    //concat 2D array    // push or concat all will work
// console.log(all_heros);
                  
                    
const all_new_heros = [...marvel_heros, ...dc_heros]  //  same work with spread operator
// console.log(all_new_heros);



const another_array = [1,2,4,3,[5,6,7],8,9,[10,11,[12]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);




console.log(Array.isArray("Rahul"));   // check whether it is array or not and it is not an array
console.log(Array.from("Rahul"));      // convert into array from string
console.log(Array.from({name:"Rahul"}))     // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
