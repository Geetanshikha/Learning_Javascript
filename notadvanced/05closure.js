//now we will study about closures in js
//we will understand it with an example
function init(){
    var firstname = "geet"
      function sayhello()
      {
          console.log(firstname);//only firstname 
      }
    return sayhello;//now here we will return the refernce of sayhello we are not calling here ohk
}

// init();
//then in this case no output will be displayed !

var value = init();
// console.log(value) so here the output will function sayhello 
//now we will call the function
value();//so here the output will be geet

//hence this is a closure way to perform this 

//let's take an another example in js 

function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAddition(4);//add5 mein function hai anonymous vala vo ja rha hai 
// console.log(add5);//hence by this we have called anonymous function 
var result = add5(5);//yhan fir vo function call ho rha hai aur uska reukt result valle variable mein ja rha hai 
console.log(result);//this is how result is displayed 

//another way to perform this 
console.log(doAddition(5)(5));//two values are passed at one go !
//hence this is happened because of the memory and closure property 

//we can also pass three values in one go
// doAddition()()()//this is called curring !
//we can have as many inputs as we want 
