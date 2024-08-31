//now here we will gonna deal wuth inheritance 
//inheritance is a concept in which one class inherits the proprties of another class 
//child class always inherits the properties of parent class
class User{
    //this is how constructor is defined 
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList=[];//as soon as we have added # we have made that variable private!
    //now every where we have to add # after courselist
    //this is how information is worked out 
    getinfo()//to get the value 
    {
        return{
            name:this.name,
            email:this.email,
        }
    }
     //this is how we can add course to the list
    enrollcourse(name){//enrollcourse is a setter which will set the value 
        this.#courseList.push(name);
    }
     //this is how we can display the course list
    getcourseList(){//here getcourselist is a getter will get the value of courselist !
        return this.#courseList;
    }
    //here we will add one more method 
    // static 
    login()
    {
        return"yes you have successfully loggedin";
    }
}

//now we will create another class naming Subadmin
class Subadmin extends User{
    //here we can form constructor 
    constructor(name,email){
        super(name,email);//now we can access it from user class
    }
    getAdmininfo()
    {
      return"I am subadmin";
    }
   //and suppose subadmin has its own method then subadmin will gonna give the priority to its own methodrather than the parent class user
    login()
    {
      return "logged in succesfull ";
    }
}

//now we will create object with this ,now let's see
const tom =new Subadmin("radhe","radhe@gmail.com");
console.log(tom.getinfo());
tom.enrollcourse("geeta");
console.log(tom.getcourseList());
console.log(tom.login());

//now suppose we don't want that any class shouls access the user class then for the securoty purpose we will gonna add static after method or property that we wanna restrict 
//hence inheritance done we can access more information from the documents if needed


