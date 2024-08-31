//the ways to create an object 
var user1={
    name:"geet",
    getusername: function(){
        console.log(`this is a ${this.name}`);
    }
}
 var lco1 = user1.getusername("geet");
 //thsi is how we have created one instance of an object using a prototype 

 //another way to create a object using prototype
 var lco2 = Object.create(user1);//here we have to give the nameof the prototype 
 console.log(lco2);
 //here it will come empty !
 lco2.name="geetanshikha"; //we have given the value to the object lco2 through this !
 lco2.getusername(); //username is extracted from here !!

 //another way to create object where we give the value with the prototype 
 var lco3 = Object.create(user1,{
         name: {value:"geetansh"},
         coursecount: {value:3},
 });

//  console.log(lco3);
 lco3.getusername();
 //this is also the way 
 