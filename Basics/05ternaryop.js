//show user a signout button if he is authenticated 
//otherwise show him option to login/signup

var authenticated = true;

//good method to try !!
// if(authenticated)
// {
//     console.log("Show sign out button");
// }
// else{
//     console.log("Show login/signup button");
// }

authenticated ? console.log("sign-out button") : console.log("Login Button");
//after authenticated is true statement and after : there is a false statement !