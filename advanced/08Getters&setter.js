//here we will learn about getters and setters in js 
//getters and setters are used to control the access to the properties of an object
//getters are used to get the value of a property and setters are used to set the value
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
}

const geet = new User("geetansh","great@gmail.com");
console.log(geet.getinfo());
geet.enrollcourse("reactjs");
console.log(geet.getcourseList());
//we can also refer directly like
// console.log(geet.courseList);//so by without using get we have displayed the value 
//but there is one condition 
//that if the variable ,clas,method,or object is defined private then to access that get is only the one which can help 
//as we have seen that after adding # we can not aacess it without using get 
// hence done