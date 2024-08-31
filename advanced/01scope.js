//we have three ways to declare variables 
//1. var
//2. let
//3. const
//so the way we use var


var name="Hitesh";
console.log(name);

if(true)
{
    var name1="Sharma"
    console.log(name1);
    //so inside if we are able to print then it's fine !
}

// but outside we can not access var right!
console.log(name1);
// but var is allowing to access it from outer 
// hence it is not right !
// so we should use let instead of var
// let is block scope variable
let name2="Hitesh";

console.log(name2);
//now if in the case of var we will try to use let 
//for an example 
if(true)
{
    let name3="geet";
}
console.log(name3);
//so in case of let it has given an error !
// because let is block scope variable