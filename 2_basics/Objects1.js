// Objects In JavaScript
//Singleton---------> Object with only one property
//Object.create




// Object literals
const mySym = Symbol("Rahul")   // symbol is unique  ***
const JsUser = {
    name: "Rahul",
    age : 22,
    location : "KIIT",
    isMarried : false,
    email: "rahul@123",
    lastLoginDays : ["Mondays","Tuesdays"],
    [mySym] : "myKey1"
}

// console.log(JsUser.name);    //object defined
// console.log(JsUser["name"]); //object defined
// console.log(JsUser[mySym]);    // myKey1        ***


// JsUser.email = "rahul@1234"   //change the value of the email to rahul@1234
// Object.freeze(JsUser)   //freeze the object if you want to edit the object
// JsUser.email = "rahul@chatgpt.com"   //it will not work because it is frozen

// console.log(JsUser);



//***************************Adding function into the object****************************/


JsUser.greeting = function(){
    console.log("Hello Coders");  //string interpolation to access the name of the Object
    }
JsUser.greetingTwo = function(){
console.log(`Hello ${this.name}`);  //string interpolation to access the name of the Object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

