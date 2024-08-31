//ohk so let's learn about arrays
//arrays is just a collection of data 

//declaration of arrays
var countries=["india","USA","Japan","China"];
//this is a way to define arrays !

//another way to define arrays 
var countries2=new Array("india","USA","Japan","China");
//new Array (); this is object oriented declaration
//so two ways [] and new Array ();

var states = ["Rajasthan","Delhi","Gujarat","Bangalore"];
console.log(states);
//this is a way to access the states .
//so this is a way to access the arrays.

//to access the particular element in an array !
console.log(states[0]);

console.log(states[3]);

//we have some methods that we can apply to it 
//to know the length of the array
console.log(states.length);

//to replace any value in an array we can do this by :
states[0]="Karnataka";

console.log(states);

//now in js there is one thing uniques that different data-types can be collected and wrapped up into a single array
//so let's see how to do that !
var mixedArray = [1,2,3,"hello",true,false,undefined,null];
//so this is a way to define mixed array !
//here we get to know that int string ,boolean they are luying in the same array .
console.log(mixedArray);
//but this is not correct way according to the define rules of data structure.

//now we have some another methods as well
//basically to delete first and last elements of the array
//we have two methods
//shift() and pop() !
//shift() is used to delete the first element of the array
//pop() is used to delete the last element of the array !
//this will remove the last element 
states.pop();
console.log(states);

//now for shifting right! this will remove the first element !
states.shift();
console.log(states);

//now to adda value in the starting and shifting the whole array 
states.unshift("Rajasthan");//" new value that you want to insert in the array in the starting position"
console.log(states);

//we can get to know the index or the position of an array 
//by using indexOf() method !

console.log(states.indexOf("Delhi"));//name of array.indexOf("jiska index you have to find");

//if the searched element is not present then the values that is going to be return is -1
console.log(states.indexOf("Kerala"));//here kerala is not present in the array so it will return -1

//now one more good thing is that we can do is we can convert the string into array!
console.log(Array.from("geetanshikha"));
