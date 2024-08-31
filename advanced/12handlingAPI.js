//this is we are gonna deal how to handle with api's 
//so firstly we will take a note that what an api is it is an application programming interface 
//it is a way to communicate between two different systems or applications
//so here we are gonna use a api to get the data from the server and display it on
//our web page
//so through api we can fetch data from one application and take that data to another application 
//we have to advantages of using api , one is security and other one is monitor
//we have api key as well to ensure more security 
//the developer wouls able to acces sthe data of the system api only when that system api has send them the api key 
//so basically api provides the dcocumentation from that dat is extracted and then thr value is extracted 

//so we will be using fetch
//fetch is all based on promises 
//if the promise(request) is fulfilled then response is generated with the chain of then 
//but if the promise(request) is denied then no response is genetaed for that we have ctach to handle the errors 

fetch("https://api.chucknorris.io/jokes/random")//so firstly we will get the url of the api that we wanna fetch and extract the data from it 
.then((response)=>{
    return response.json;
})//here then is just like a method ohk the same way like this we will work with it 
//now the result of then will go to next then ,
.then((data)=>{
    //console.log("DATA:",data);
   var joke = data.value;
   console.log("JOKE:",joke);
})
.catch();