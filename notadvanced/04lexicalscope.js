//this is a classical way to write js 
//let's understand with by the example of js 
function init(){
    var firstname = "geet"
      function sayhello()
      {
          console.log(firstname);//only firstname 
      }
    sayhello();//hello function is called !
}

init();//we have called the function output is displayed !

// in this first sayhello function will run then init function will run !
//so we can say that sayhello is a local function of init function