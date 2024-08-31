//we have opeartors like addition , subtraction , multi[lication , division 
var num1=5;
var num2=10;
var num3=15;
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1%num2);

//deal with comparing operators
var answer = num1 > num2;
console.log(answer);

//we have logical operators like and , or , not
var answer=(num3 < num2) && (num2 > num1);
console.log(answer);

var answer=(num3 < num2) || (num2 > num1);
console.log(answer);

//now we will calculate the discount price 
//D = ((l-s)/l)*100;
//so this is a discount !

var listPrice = 700;
var sellprice = 100;
var discountprice = ((listPrice - sellprice)/listPrice)*100;
console.log(discountprice);

discountpercentage = Math.round(discountprice);
console.log(discountpercentage + "% off");
//Math is a library from where we have used round off ohkk ! (Math.round) !

var data= true;
//so by using typeof we can get the type of that variable !
console.log(typeof data);//here it is boolean 

var great = "guddu";
console.log(typeof great);//here it is string !

var num=890;
console.log(typeof num);//here it is numerical , integer !