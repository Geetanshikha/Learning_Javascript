//we will deal with forin and for of 
//for of is used in arrays
const web=["Yotube","Facebook","Instagram","Learncodeonline"];
for (const x of web) {
    console.log(x);
}

//now we will use forin ok
//for-in is used for object which has key value pairs
const symbols={
    loc:"Learncodeonline",
    yt:"youtube",
    it:"Instagram",
    fb:"Facebook",
}

// for(const x in symbols)
// {
//     console.log(x);//it will give keys in results 
//     //to get values we will do
//     console.log(symbols[x]);
// }

for (const x in symbols)
{
    console.log(`key is ${x} and value is ${symbols[x]}`);
}

//we have completed !
