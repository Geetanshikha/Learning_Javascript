//first user sign up !
const uid="abc123";

var fullname="Vagish Gautam";
var email="geetanshikhagautam@gmail.com";
var password="123456";
var confirmpassword="123456";
var coursecount=0;
var isloggedinfromgoogle=false;
//we can take entry from user as well 
//prompt("Enter your name");
//fullName = prompt("enter your name");


//hence this is the way to take details from the user signup page 
console.log(fullname);
console.log(email);
console.log(password);
console.log(confirmpassword);
console.log(coursecount);
console.log(isloggedinfromgoogle);

//so this is the one way to display js 
//another way is 

console.log("full name is :" + fullname);
console.log("full name is :" , fullname);

//now the best way to display is 

console.log(`
       fullname is :${fullname}
       email is:${email}
       password is:${password}
       confirmpassword is:${confirmpassword}
       coursecount is:${coursecount}
       isloggedinfromgoogle is:${isloggedinfromgoogle}
       `);
       //this is interpolation in js!
       
    

