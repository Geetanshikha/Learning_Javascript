//now here we will deal with the binding proto property of js 
//let's understand this by example
// we are creating an object geet
const geet= {
     firstname:"geetansh",
     lastname:"sharma",
     role:"Admin",
     course_count:3,
     //here we are designing the method as getinfo
     getinfo : function()
     {
        console.log(`
              firstname is ${this.firstname}
              lastname is ${this.lastname}
              role is ${this.role}
              course count is ${this.course_count}
            `)
     }

}
console.log(geet);//the way to print object 
//so what we have observed with this that there are some proto propertirs of mthods and some of object 
// we get to know some of the prop
//some are bind,call,constructor,length!
//so let's see them one by one
//for that we will write another example
//we have created another object named as dj
const dj={
    firstname:"rock",
    lastname:"dj",
    role:"subadmin",
    coursecount:4,
}

geet.getinfo();
//now we will used the method of geet in dj by the help of bind function 
geet.getinfo.bind(dj)();//hence through this the this pointed who is ponting the geet object will start ponting to the dj
// geet.getinfo.bind(dj)(); //hence through this the this pointed who is pont
// and another way is

var djinfo = geet.getinfo.bind(dj);
djinfo();//hence through this the this pointed who is ponting the geet object will start

//we have so many methods we have call methods as well 
//call method is used to call the function or method of one object from another object
geet.getinfo.call(dj);

//hence this is how bind works 
