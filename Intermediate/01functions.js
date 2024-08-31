//here we will lean how to declare a function
//how to initialize a function
//how to call a function
//how to pass a parameter to a function
//how to return a value from a function

function sayhello() //function name is sayhello
{
    console.log("hii guddu !");
}

sayhello();
sayhello();
sayhello;
 //now we will give a parameter 

 function sayby(name) //function name is sayhello here name is a argument or parameter 
 {
    console.log("hii guddu",name);//this is the way we can use name in the statements 
    console.log("hii" , name ,"byyy !");
 }

 sayby("geet");//from here geet is the value which is passed for the parameter name ohk !
 sayby("guddu");
 //so here parameter is name 
 //and we are calling out with the name !

 function define(name)
 {
    console.log(`hii ${name} , how are you ?`);
    console.log(`please ${name} , have some coffee !`);
    //so this is another way to display an output .
 }

 define("guddu");
 define("geetansh");

 //hence another way is
 function calc(name)
 {
    return " hii how are you guddu ! ";
 }
 calc();//here on calling the function is returning it means that you have to store the value in some variable or display it in the format of console.log
 var great=calc();//putting the value of calc inside the variable great
 //now we will diaply the variable
 console.log(great);
 console.log(calc());