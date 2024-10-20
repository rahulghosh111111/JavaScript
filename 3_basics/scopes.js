

let a =200
if(true){
    let a = 10
    // console.log("Inner Scope :",a);
    
    const b = 20
    // var c = 30 
}

// console.log("Outer Scope :",a);
// console.log(b);
// console.log(c);





function one(){
    const username = "Rahul"

    function two(){
        const website = "youtube.com"
        // console.log(username);    //Rahul
        // console.log(website);      //youtube.com 
    }
    // console.log(website);     // not defined
    // console.log(username);        //Rahul

    two()
    
}
one()




if(true){
    const username = "Rahul"
    if(username === "Rahul"){
        const website = " youtube.com"
        // console.log(username + website);
        
    }
    // console.log(website);    // not defined error    
}
// console.log(username);   // not defined error







//++++++++++++++++++++interesting+++++++++++++++++++++++

function addone(num){
    return num + 1
}
console.log(addone(5));
 

const addtwo = function(num){
    return num + 2
}
addtwo(7)