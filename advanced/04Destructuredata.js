//now here we will learn how to destructure the data 
//basically how to pick the data 
//destruction of data is learnt here 
//destructuring is used to pick the data from the object
//destructuring is used to pick the data from the array
//in both the cases destructing data is possible 


//most important point to be noted is that whatever data type there is one the right hand side ,that same datatype will be there on the left hand side 

//now for example !
const user = ["geet",28,"admin"];
//this is we have created an array 
//now we will destructure the data from the array
//there are two ways one is the normal in which we will take the dat acasually by
console.log(user[0]);
console.log(user[1]);

//now we have another way as well 
//in this we will use the destructuring
//in destructuring we will use the variable name on the left hand side and the data on the
//right hand side
//so here we will use the variable name on the left hand side and the data on the right

var [name, courseCount, role] = user;

console.log(role);
console.log(name);
//this we have destructing the data from array 

// now we will destruct the data from the object 
//here myuser is a object !
const myuser = {
    name1:"geet",
    count:"28",
    role1:"admin",
}

//one way is to 
console.log(myuser.name1);

//another way is to 
console.log(myuser.count);

//another way is 
const{name1, count, role1} = myuser;
//datatype + names of variables should be same ohk !
console.log(name1);
//suppose if the names will be different then the error will be dispalyed on the screen 
//let's see with the example 
const{name3,count2,role2} = myuser;
console.log(name3);
//output is undefined 
//hence destructuring of data takes place in arrays and the objects both 
//and the datatype + names must be same
