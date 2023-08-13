//global scope

// // var x= 0; 
// function first(){
//     var x= 1;
//     console.log(x);
//     function second(){
//         var x= 10;
//         console.log(x);
//     }
//     second();
// }
// first();

// function third(){
//     console.log(x);
// }
// third();

// let name = "sam";

// function sayname(){
//     // var x = "10";
//     console.log(name);
// }
// sayname();
// // console.log(x);

// block scope
var x= 0;
{
    // let z = 11;
    console.log(x);
    var z = 11;
}
console.log(z);

if(true){
    var foo ="bar";
}
console.log(foo);