var user = {
    firstname:"Geetanshikha",
    lastname:"Gautam",
    role:"Admin",
    logincount:32,
    isloggedinfromgoogle:true,
    courselist:[],
    //now we are about to declare method in an object 
    //now we are about to declare method by function
    buycourse: function(coursename)
    {
        //from this method we will gonna add courses into the courselist
        //to access the course list we will use this keyword
        this.courselist.push(coursename);//so we have push the course name into the courselist ohkk
    },
    getcoursecount : function() {
        return `${this.firstname} is enrolled in total of ${this.courselist.length}`;
        //this is how we will return it in method 
    }

}

console.log(user.getcoursecount());//to call the method we will use parenthesis
user.buycourse("React JS Course");
user.buycourse("JS Course");
console.log(user.getcoursecount()); 
console.log(user.courselist);

//the task is to define the object  info  which will have all the methods
var info ={


}