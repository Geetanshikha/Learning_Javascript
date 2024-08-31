//what we have like 
//undefined
//null
//0
//''empty string 
//NAN
//these are falsy values 
//other than these are truth values 

var num;
console.log(num); //undefined

var num=0;
console.log(num); //0

var num=null;
console.log(null); //null

var nat=2;
console.log(2+2);
//when we are adding number and number then simply addition will take place .
console.log("2"+ 2);
//when we are adding string and number they will concatenate.
console.log("2"+ "2");
//in case hwen we are adding string and string then also they will conacatenate 

var num1="2";
if(2==num1)//ohk string and number can not be equal no !
    //js is not strictly checking the equalityso for that we will use === (these three triplets ohk)
{
    console.log("true");
}


if(2===num1)
{
    console.log("number is equal ");
}//hence now it has strictly follow the quality rules that string and number can not be equal.
//this is called typecursion .