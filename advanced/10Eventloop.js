//here we will get to know about event loop ,async 
//so all the meassages like console,declasration , calling , etc are collected in the queue and based on their timing or priority are stored in heap or stack and executed by compiler 
//so this is managed by event 
//while(queue.wait for message()){
 //queue.process next meassage();
//}

//now let's understand thec concept of async in function

// function uno(){

// }
//this is one way out 
//another way is 
//arrow function to declare function !
const uno = ()=>{
    console.log("I am one");
}

const dos = ()=>{
    //set time out is a method !
    setTimeout(()=>{
            console.log("waohhhh");
    },3000);//so because of its timing the ones who were taking less timing sgot executed than the turn goes to this message 
    console.log("I am two");
}

const tres = ()=>{
    console.log("I am three");
}

const fos = ()=>{
    console.log("I am four");
}

uno();
dos();
tres();
fos();
//now on the basis of sequesnce of calling the messages were going to be executed !

//hence the management of messages is done by evenet loop for execution !