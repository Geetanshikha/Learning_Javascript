//here we will decide to make a object using functional approch 
//we will use a prototype which is going to be used by every single user !

//so now let's create a prototype
var lco=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=function(){
            console.log(`course count is :${this.courseCount}`);
       };
    };

    //here we are creating method outside of prototype like getcoursecount and that is possible ohkk !
    // now we can make setters & getters as we can use prototype to directly access the first name without going inside the object 
    lco.prototype.getFirstName=function(){
           console.log(`your first name is ${this.firstName}`);
    }

    //now let's create a user object using the prototype
    var user1=new lco('Rohan',10);
    
    console.log(user1);
    //now let's call the function using the user object
    user1.getCourseCount();
    //we will ckeck whether this property exist if yes than only we will call the function 
    if(user1.hasOwnProperty("firstName"))
    {
        user1.getFirstName();
    }
    //now let's create another user object using the same prototype
    var user2=new lco('Rohan',20);//the new keyword used here has made the this pointer pointing towards the functional object !
    console.log(user2);
    user2.getCourseCount();
    user2.getFirstName();
    //so this is how we can diresctly have the course count and name from the object 
    //so one way is to define method inside an  object 
    //but when we have prototype we can do it directly outside the object as well 
    // and can call them for unique user 


    // hence we have learned how by the use of prototype we have created many users 
    // and every user has its own course count and first name
    

