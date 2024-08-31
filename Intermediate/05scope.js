//this is scope chaining !!
var name="guddu";
console.log("first line 3:",name);

function sayname()
{
    var name="geet";
    console.log("line number 7:" , name);
    sayname2();

    function sayname2()
    {
        var name="geetansh";
        console.log("line number 11:" , name);
    }
}

//and we can call functions as methods !