//here we will learn more concept about this ohkk
//so look
//point to be notesd is that 
//whenever the regular function will be called then the window object is pointed always 
console.log(this);//so it has given empty object , but if we have run it in browser then it will give windows object 

var user = {

    firstname: "Guddu",
    lastname: "gopinath",
    coursecount: 4,
    getcoursecount: function()
    {
        console.log("LINE no 7",this);
        function sayhello(){//this ia a regular function call that's why whindow object is pointed !!
            console.log("Hello");
            console.log("line no 10",this);
        }
        // sayhello();
    }
};
 user.getcoursecount();
//this is when oject method is called the oject that we have created is pointed 


