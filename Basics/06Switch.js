//we have to create an application with the following roles
//admin - get full courses
//sub-sdmin - get access to create /delete courses
//testprep - get access to create /delete tests
//user - get access to consume content 

var user="testprep"

switch (user) {//here user is a key & values are admin,subadmin,testprep,user!
    case "admin":
        console.log("get full courses");
        //we can use return as well instead of console.log("to get full courses");
        //if we use return then no need to put upon break !
        break;
    case "sub-admin":
        console.log("get access to create /delete courses");
        break;
    case "testprep": 
        console.log("get access to create /delete tests");
        break;
    case "user":
        console.log("get access to consume content ");
        break;
    default:
        console.log("trial user");
        break;
}

//hence basic is done !