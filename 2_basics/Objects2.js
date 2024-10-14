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
// console.log(obj3);





const users = [
    {
        id : 1,
        email : "rahul@gmail.com"
    },
    {
         id : 1,
        email : "rahul@gmail.com"
    },
    {
         id : 1,
        email : "rahul@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));   // individual key and value of the object

console.log(tinderUser.hasOwnProperty("id"));
console.log(tinderUser.hasOwnProperty("email"));


