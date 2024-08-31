//now here we will study about scope and rest operators 
//...args can be the name of array or object 
//this is called spresd operator and rest operator 
//on the basis of challenge and functionality we will choose which one to choose 
//let's understand this with an example 


//now here we have to find the maximum amonf the numbers 
var returned_value=Math.max(2,3,5,4,8,1);
console.log(returned_value);
//ohk so here we have find outthe maximum value 

//now let's see another example 
var myobj={};
Object.assign(myobj,{a:1,b:2,c:3},{z:9,y:8,x:7})
//so here the result of the two will gonna be stored in this empty myobj 
console.log(myobj);
//so here two objects are combined and put into the myobj

//let's take another example 
function sumone(a,b){
    return a+b;
}

var result = console.log(sumone(5,4));
console.log(result);
//now the challenge comes in which we will get to know how spread and rest operators works !!!
//so let's see the example of spread operator
var myA = [5,4];
console.log(sumone(myA));
//no addition is performed as no array to be used in the function , datatypes are changes function i
//is designed for numbers as an argument but we are passing arrays 
//so to ressolve this we will use spread operator
console.log(sumone(...myA));//now what the spread opeartor do it will convert the array into elements 
//so it takes a group and spread it into multiple values 

var myA = [5,4];

//now another way where we will see the role of rest operator 
//this function is going to add the multiple numbers 
function sumtwo(...args) //here args is a object !
{
    let sum=0;
    for (const arg of args)//here arg is an iterator will access element by element of args 
    {
        sum=sum+arg;
    }
    return sum;
}

console.log(sumtwo(5,4,8,9,5));
//so as many numbers we will pass the rest operatoe will group it into an a=object then that object will gonna be itearte by an iterator 
//so here we have seen the role of spread and rest operator in javascript

//now if we want that in an values which is passed we want to multiply starting elements and the rest elements we wnat to add like 5 ,4 will be multiplied and the rest elements will be added 
//so for that we will make function
function sumthree(a,b,...args){
    //here args is a object which is not having a and b
    //and a and b are starting elements 
    console.log(args)
    let mul=0;
    mul=a*b;
    let sum=0;
    for (const arg of args)
        {
            sum=sum+arg;
        }

        return [sum , mul];
}

console.log(sumthree(2,3,4,5,6,7,8,9))

//ohk so we have done that !
