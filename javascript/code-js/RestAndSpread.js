//rest operator and spread operator
//rest operator uses the two or more arguments in the function also use string 
function restFunction (name, operator, ...arguments){
    let sum = 0;
    console.log("rest operators:", arguments);
    console.log("string value:", name);
    console.log(`hello ${name} your  ${operator} is successfully run and sum is :`)
    for (let i in arguments){
        sum += arguments[i];
    }
    console.log(sum);
    
   
}
// restFunction(20, 30);
restFunction("Rafiq", "rest opeartor" , 20, 30, 40, 50 ,60);
restFunction("dilshad", "rest operator", 11, 1);

//spread operator takes an array as an argument
console.log("spread operator examples")
function spreadFunction( name, ...args){
    let sum = 0;
    console.log(args);
    console.log(`name of user ${name}:`)
    for(let v in args){
        sum += args[v];
    }
    console.log(sum);

}
var arr = [ 20, 30, 50]
spreadFunction("sameer", ...arr); //... spread operator here

//example

let array1 = [30, 60, 90];
let array2 = [...array1];
array1.push(120);
console.log(" new array:", array1);
console.log(" new array:", array2);

let array4 = array1.concat(array2);
console.log(array4);
 let array5 = ["use spread operator",...array4, ...array1, 100];
 console.log(" spread also work as concate the array:", array5);
//spread also concate the objects
 let obj = {
    name: "muhammad rafiq"
 }
 let obj2 ={
    age: 25
 }
 var obj3 ={...obj, ...obj2};
 console.log(obj3);