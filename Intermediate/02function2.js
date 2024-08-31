//we have to define a function that can answer the role of a user 
//a user can do the following roles 
//admin- with all access
//subadmin- with access to delete /create courses
//testprep - with access to delete /create tests
//user - consume all content
//default - trial user

//so firstly we will gonna form a function

// function getuserrole(name, role)
//there is another way to declare an function we can put it inside variable as well
//toh aap jo function hai usse variable mein bhi daal sakte ho !, no problem at all 
var getuserrole = function(name,role)//name , role are the parameters 
{
    switch (role) {
        case "admin":
            return `${name} is admin with all the access`;
            // break;
        
        case "subadmin":
            return `${name} is subadmin with access to delete/create courses`;
            // break;

        case "testprep":
            return `${name} is testprep with access to delete/create tests`;
            // break;

        case "user":
            return `${name} is user with access to consume all content`;
            // break;

        default:
            return `${name} is a trial user`;
            // break;
    }
}

console.log(getuserrole("geetanshikha " , "admin"));

//so when we are putting return there is no need to put a break
//next if we want to include name as well while writing in return then we will use `${} `

