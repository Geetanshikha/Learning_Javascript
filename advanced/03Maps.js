//so here we are going to learn about maps 
//maps are like objects in other languages
//they are key value pairs

//now we will see how to declare maps in js 
var myMap = new Map()//var obj = new object 

//this is how we enter the values inside the map !
myMap.set(0,"geet");
myMap.set(1,"tan");
myMap.set(2,"shikh");
myMap.set(3,"ansh");
myMap.set(4,"jeet");

//here we ahve displayed the output of myMap
console.log(myMap);

//now claasic way to use for-of-loop
// for (let [key, value] of myMap) {
// }

// so this is to have keys 
for (let key of myMap.keys()){
    console.log(`keys are ${key}`);
}

// now to have values
for(let values of myMap.values()){
    console.log(`values are ${values}`);
}

//now to have both keys and values 
for (let [key, value] of myMap){
    console.log(`keys are ${key} and values are ${value}`);
}

//we can use foreach as well 
myMap.forEach((value, key) => {console.log(`key is ${key} & value is ${value}`)})
//we can not access keys with this foe each because it considers keys as default index 
//if we will try also then it will give us the value !
//we have some more operations as well 
myMap.delete(2);
console.log(myMap);
//so we can remove the key and its value by this , ohk !

//and there are more we can read them by documents 
