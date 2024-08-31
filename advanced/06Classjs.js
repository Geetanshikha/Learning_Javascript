
//so this is how class is formed 
//in classes we will be having methods , functions ,constructors 
class User{
    //this is how constructor is defined 
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    courseList=[];
    //this is how information is worked out 
    getinfo()
    {
        return{
            name:this.name,
            email:this.email,
        }
    }
     //this is how we can add course to the list
    enrollcourse(name){
        this.courseList.push(name);
    }
     //this is how we can display the course list
    getcourseList(){
        return this.courseList;
    }
}

//now we want to that other files will be able to access this class so for that 
//we will export the class
module.exports = User;//entire class is exported 
