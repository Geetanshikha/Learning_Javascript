//for each loop is usually considered as methods in arrays

//so before that we have one question 
var i=0;
for(;;)
{
    if(i>3) break;
    console.log(i);
    i++;
}
//this is just to tell you that we can increment in side the for loop as well,great 

//now let's talk about for each loop
//basic syntax for foreach willbe:
//  nameofarray.foreach(()=>());
var states=["Rajasthan",'assam','mumbai',"pune"];
states.forEach(s => (
    console.log(s)
));



