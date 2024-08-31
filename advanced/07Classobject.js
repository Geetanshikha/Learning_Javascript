//now we will create objects here 
//so for that firstly we will import the class any way 
// import User from ("./06Classjs")
//this is one way out 
//next way is 
const User = require("./06Classjs");

// now we will create the object named geet
const geet = new User("Geetansh","geetansh@gmail.com");//here user is class name 
//now we will print the object
console.log(geet.getinfo());
//now we will call the method
//now we will add some courses to the courselist 

geet.enrollcourse("React Bootcamp");

geet.enrollcourse("Angular Bootcamp");

console.log(geet.getcourseList());

//we have another way as well 
let courses = geet.getcourseList();
console.log(courses);//so it will be in the form of array and object 
//but if we want to display it in the original form then 
//we will be using for each 
courses.forEach((c)=>console.log(c));//here c is an iterator which is accesing one by one the elements of the array 
//and displaying it indiviually 
//so what c is doing taking the element and displaying it , then again taking the element and displaying it likewise 
//this will print the names of the courses indiviually !