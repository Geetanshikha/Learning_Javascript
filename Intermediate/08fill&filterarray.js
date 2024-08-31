var testArray=[2,4,6,8,10];
// console.log(testArray.fill(0));

//so this is a method to fill all the elements of the array by the number that we pass on fill().

// console.log(testArray.fill("try"));
//here we have replaced all the values with string 

//now we can also give range to it 
//that is we will do !
console.log(testArray.fill("h",1,3));
//so here the filling or replacement of the elements of the array will start after 1 element and end at the third element 

//we will aplly filter 

const myNumber = [23,24,25,44,33,55,67];
const result = myNumber.filter((num) => num!=55);
//this is how we apply filter nameof the array.filter((num) => num!=55 or any consdition you want to put in)
console.log(result);

let name=[11,12,13,14,15]
let result1= name.filter((num)=>num%2==0);
console.log(result1);

let x=[1,2,3,4,5,6,7,8,9,10];
let result2 = x.fill("maybe",3,9); 
console.log(result2);

//so this is how filter and fill works !!