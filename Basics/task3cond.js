//we have to allow user to access the course if he is
//loggedin from google
//logged in from e-mail
//logged in from facebook 

var email=false;
var google=false;
var facebook=true ;

//this one is an efficient method 
// if(email || google || facebook)
// {
//     console.log("can access the course");
// }
// else{
//     console.log("cannot access the course");
// }

if (email)
{
    console.log("succesfully logged in from email");
}

else if(google)
{
    console.log("succesfully logged in from google");
}

else if(facebook)
{
    console.log("successfully logged in from facebook");
}

