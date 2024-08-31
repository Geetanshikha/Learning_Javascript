//usually to store string we use double quotes 

var name="geetanshikha";

//we can also write as 
var name='geetanshikha';

// if we want to use double inverted inside these outside commas 
var name="geetanshikha\"s"
console.log(name);
//now we can do so many things with name 
var fullname="geetansh sharma";
//we can find charater at the defined position in fullname like 0th , 1st,2nd 
console.log(fullname.charAt(0));
//we can check as well that whether this character is there in the fullname or not !
console.log(fullname.includes("e"));
console.log(fullname.includes("sharma"));
//we have another way out to check that whether the name ends with this character 
console.log(fullname.endsWith("g"));
//we can also convert the string into another form like lowercase, uppercase
console.log(fullname.toLowerCase());
//we can same like this can conver into upper case 
console.log(fullname.toUpperCase());
//and we have many more we will discuss them later , done !

console.log(fullname);