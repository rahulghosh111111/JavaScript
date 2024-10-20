function saymyname(){
    console.log("Rahul");
    console.log("Ghosh");
    
}

// saymyname()


function addTwoNumbers(num1,num2){
    // console.log(num1+num2);
    let result = num1+num2
    return result   
    
}
const result= addTwoNumbers(7,8)
// console.log("Result:",result);





function loginUserMessage(username){
    if(!undefined){                             //if username is undefined (username==undefined) 
        console.log("pleare enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());  // undefined
// console.log(loginUserMessage("Rahul"));




function calculateCartPrice(val1,val2,...num1){          // ... is spread operator to pass multiple arguments
    return num1
}
// console.log(calculateCartPrice(100,200,300,400,500,600));





const user = {
    username : "Rahul",
    price : 999
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

handleObject ({               //pass object as an argument
    username : "RahulGhosh",
    price : 499
})




const myNewArray= [200,300,400,500,600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500,600]));

