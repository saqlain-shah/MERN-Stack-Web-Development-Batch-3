//values overwrite
var a = 3;
var a = 5;
//  console.log("value of a:", a)
 // data types
 const CustomerName = "Rafiq";
 var age = 25;
 let gender = "male";
 let location = null;
 var valid = false;
 var s = undefined;
 var s;
 console.log(CustomerName);
 console.log(age);
 console.log(gender);
 console.log(location);
 console.log(valid);
 console.log(s);
 console.log(s);

//  var address = "";
//  console.log("location is :", location);
//  console.log("address is :", address);
 // const values are not changed
//  const user = "this is a user";
//  const user = " this is a user 2";
//  console.log("user is:", user);
 //array and object
 var emlpoyee = ["rafiq", 25 , "ics", "skardu"];
 console.log("array values:", emlpoyee);

let obj2 = {
    emlpoyee: "atif",
    id: "31A",
    status: "HR",
    company: "rinor technologies"
}
 
 var obj1 ={
    name: "muhammad rafiq",
    age: 25,
    address: "skardu",
    gender: "male",
    emlpoyee : ["rafiq", 25 , "ics", "skardu"],
    obj2 : {
        emlpoyee: "atif",
        id: "31A",
        status: "HR",
        company: "rinor technologies"
    }

 }
 console.log("values of objects:", obj1.obj2.company);
 console.log("values of objects member:", obj1.name);
 console.log("values of objects member:", typeof emlpoyee[1]);
 
 var x =123;
 var y=x;
 var y= 456;
 console.log("value of x:", x);
 console.log("value of y:", y);
//operators

var a = 4;
var b = 4;
var c= a+b;
var d= c*5;
if(a==b){
    // console.log("eqaual");
    // alert("value is true you may continue")
}else{
    console.log("not equal");
}

console.log("addition of a and b:", c);
console.log("addition of a and b multi with 5 times:", d++);

var f=10;
 f &&= 5;
 console.log(f);
var g=10;
 g ||= 5;
 console.log(g);
var h= undefined;
 h ??= 5;
 console.log(h);

 //precedence

 var w= 10 * (50 - 30) + 10;
 console.log("value of w:" + w);
// comprision operators
// equal to
 var userNameID = 12;
 var companyID = "12";
if(userNameID==companyID){
    console.log("true");
}else{
    console.log("false");
}
// equal value and equal type
 var userNameID = 12;
 var companyID = 13;
if(userNameID===companyID){
    console.log("true");
}else{
    console.log("false");
}
// not equal value and not equal type
var userNameID = 12;
var companyID = 13;
if(userNameID!==companyID){
   console.log("true");
}else{
   console.log("false");
}

//normal function 
myFunction(4,4);
function myFunction(a,b){
    c= a * b;
}
console.log(c);
let hello ="";
hello = () =>{
    return "hello world"
}
console.log(hello());
//
function myFunction(a,b){
    return a * b;
}
 var q=myFunction(10,2);
console.log(q);

function work(a,b){
    return a * b;
}
var x=work(q,2);
console.log(x);

//function example