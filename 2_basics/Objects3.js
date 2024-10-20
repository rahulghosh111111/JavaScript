
// destructure the object


const course = {
    coursename : "Javascript",
    price : 999,
    courseinstructor : "Rahul"
}
// console.log(course.coursename);

// extract the value from the object or destructure the object
// const {courseinstructor,price} = course
// console.log(courseinstructor);

const {courseinstructor : instructor,price} = course   //change the name of the variable
console.log(instructor,price);




// destructure the Array