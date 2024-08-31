//we have to manage like a user can purchase only when all the conditions are true 
//loggedin
//email verified
//card-info - valid
//if any one is missing , stop purchase it ohk!

var isloggedin = true;
var emailverified = true;
var cardinfovalid = true;

// if(isloggedin)
// {
//     console.log("LoggedinSuccess");
//      if(emailverified){
//       console.log("Email is verified");
//        if(cardinfovalid){
//         console.log("Purchase Success");
//       }
//     }
// }
// here using && that means all the if all the conditions would result in true then output is true 
if(isloggedin && emailverified && cardinfovalid)
{
    console.log("Purchase successfull");
}
else //if any one of it turns false it will give false !
{
    console.log("Purchase failed");
}
