//so there are two type of contexts 
//global & execution
//two major rules to keep in mind
//first that function declared can be globally used anywhere it is accessible
//second that if variable declared it is not accebile anywehre and will result undefined 
//lets see with the example 

tipper(20);//here tipper is called before function declarateion 
function tipper(a)//here a is a parameter 
{
    var bill=a;//bill ko a de diya 
    console.log(bill+ 15);
}

tipper(67);//67 is passed with calling of the function tipper !

//now we will try for the variable portion
tipper(20);

var tipper = function(a)//here function is declared in the form of variable 
{
 var bill=a;
 console.log(bill+ 15);
}

// tipper(20);
//so hence both points are cleared that it will not work for the case of a variable.
//let's see another example
function bigtipper(a)
{
    var bill=a;
    console.log(bill+ 15);
}
bigtipper(90);

console.log(name);

var name="geet"

function sayname(){
    var name="mr H";
    console.log(name);   
}
sayname();
console.log(name);

//point to be noted if you wanna convert string into a number 
//var bill = parseInt(a);

//hence this is named as code hoisting !