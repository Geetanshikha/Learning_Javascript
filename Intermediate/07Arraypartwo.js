function iseven(element) {//humare paas function h jyska naam iseven h aur usmein element we have passed as a parameter !

    if(element % 2 == 0)
    {
        // console.log("element is even");
        return true;
    }
    else{
        // console.log("element is odd");
        return false;
    }
}

console.log(iseven(9));

// now there is another way for this 
function iseven(element) {
    return element % 2 == 0;
}
console.log(iseven(4));

// there is another way 
//now we will use arraow function
var iseven = (element) =>{
    return element % 2 == 0;//basically here the checking is taking place like there is one elment which is checked that whether the element is divisible by 2 if true answer will be returned as true 
}

console.log(iseven(6));

// now we will see another method
var result = [2,4,7,8,10].every(iseven);//here every element is checked that is it even if yes than result will be true !
console.log(result);
//so here we are checking for the array [2,4,7,8,9]
//without a loop that is it even or odd 
//here iseven the reference of the above function is taken ohkk

//now how callbacks works 
var result=[2,4,6,8].every((e)=>{
    return e%2==0
});

console.log(result);

//another way is 
var result=[2,4,7,6,8].every((e)=>(e%2==0))
console.log(result)//this is without use of return & {} 

