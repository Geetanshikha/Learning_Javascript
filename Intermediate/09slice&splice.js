var users=["tim","tom","sam","soe","sam","sum"];

//now we will use slice ojk
//slice is used to get the part of the array
console.log(users.slice(1,3));
//now here 1 is inaclusive that is the starting index is inclusive and 3 is exclusive that the index before it which is 2 will be considered
console.log(users.slice(2,4));
//to print all the elements of array
console.log(users.slice(0));

//now we will perform splice 

console.log(users.splice(1,2,"hii"));
console.log(users);
//so in splice first number is 1 that is the starting indexed number and the nuext number is how many steps it will go further and then remove hat and will replace it with the string 
//so 1 is the staring indexed number and 2 is number of times and string is replaced that is hii
//we can add as many strings as possible
//like
console.log(users.splice(1,3,"hii","bye"));
console.log(users);
