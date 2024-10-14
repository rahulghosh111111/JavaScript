// const tinderUser = new Object()
const tinderUser={}
tinderUser.name = "Rahul"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false 
// console.log(tinderUser);


const regularUser = {
    email : "rahul@gmail.com",
    fullName :{
        userfullname:{
            firstname:"rahul",
            lastname:"ghosh"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);



// combination of objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}            // use it if you want to combine 2 objects    
console.log(obj3);
