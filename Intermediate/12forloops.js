//let us study for loops 

// declaration of for loops is takes place 

// for (//initialization;condition;increment/dcerement){
    // code to be executed
//}
//this is printing the number from 1 to 10
for(let i=0;i<=10;i++)
{
    console.log(i);
}
//now only printiong even numbers from 1 to 10

console.log(" ");
for(let i=0;i<=10;i+=2)
{
    console.log(i);
}

//now we will see how to use for loops in an array !
// let us create an array
const mystates =[
   "Rajasthan",
   "Maharashtra",
    "Gujarat",
    1947,
    "Assam",
    "Tamil Nadu",];

var n= mystates.length;

console.log(" ")
console.log(n);
console.log(" ");

for(let i=0;i<n;i++)
{
    console.log(i);
}
//to print an array through  looping 
for(let i=0;i<n;i++)
{
    console.log(mystates[i]);
}
console.log(" ");
//now we want to print only string values not integer values 
//so we will use if condition inside for loop
for(let i=0;i<n;i++)
{
    if(typeof mystates[i]==="string")
    {
        console.log(mystates[i]);
    }

}
//now if we want to print integer values other than string ;
for(let i=0;i<n;i++)
{
   if(typeof mystates[i] !== "string") continue;//things will not stop loop will not stop as soon as it will encounter some numerical value 
   console.log(mystates[i]);
}

//now we will see how to use break statement 
for (let i=0;i<n;i++)
{
    if(typeof mystates[i] !== "string") break;
    {
        console.log(mystates[i])
    };
}

var array=[
    "rajasthan",
    "maharashtra",
    "gujarat",
    1389,
    "karnataka",
]

let x=array.length;

for(let i=0;i<n;i++)
{
    if( typeof array[i] !== "string" )
    {
        console.log(array[i]);
    }
}

