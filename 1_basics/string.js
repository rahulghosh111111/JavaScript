const name = " Rahul"
const github = "rahulghosh111111"

// console.log(name + roll + " Ka github");    //string concatenation

// console.log(`Hello my name is ${name} & my github id is ${github}`);   //string interpolation 

const gameName = new String("ClashOfClan")

// console.log(gameName[6])
// console.log(gameName.length);   // length of string
// console.log(gameName.toUpperCase());  // convert into upper case(Block letter)
// console.log(gameName.toLowerCase());  // convert into lower case(Block letter)
// console.log(gameName.charAt(6));    // 6th index of character 

// console.log(gameName.indexOf("l"));    // 6th index


const newString = gameName.substring(0, 5)  // 0th index to 5th index (5th index not included) 
// console.log(newString);


const anotherString = gameName.slice(-7, 5)   // 7th index to 5th index from the end
// console.log(anotherString);  // 7th index to 5th index (5th index not included) from the end


const newString1 = "   Rahul    "

// console.log(newString1);
// console.log(newString1.trim());   // remove white space from start and end

const url = "https://github.com/rahul%20ghosh111111"             

// console.log(url.replace("%20", ""));   // remove %20 from url  
// console.log(url.includes("rahul")); // return true or false , it means rahul is in url or not

// console.log(url.includes("hello"));


console.log(url.split("%20"));  // return array of strings



