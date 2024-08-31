//lets underastand some of the concept of promise,async,await
const uno = ()=>{
    return ("I am one");
}

// const dos = ()=>{
//     //set time out is a method !
//     setTimeout(()=>{
//             return ("waohhhh");
//     },3000);//so because of its timing the ones who were taking less timing sgot executed than the turn goes to this message 
//     return ("I am two");
// }

//here now we will see the work of promise 
const dos = ()=> {
      return new Promise((ressolve,reject)=>{
        setTimeout(()=>{
            ressolve("I am two");//if the promise ressolved then this is going to be there in the output
        },3000);
      })//it is just like an object declaration
    }

    const tres = ()=>{
    return ("I am three");
}

const fos = ()=>{
    return ("I am four");
}
//so here instead of console.log we will use return 
//ohk so now we will gonna make a method call me that is speacially gonna use for calling
const callMe = async()=>{//now we will add async to a method 
    let valone = uno();
    console.log(valone);
   
    let valtwo = await dos();//through this after waiting the rest output will be executed 
    console.log(valtwo);
 
    let valthree = tres();
    console.log(valthree);
}

callMe();//this we have called a function 