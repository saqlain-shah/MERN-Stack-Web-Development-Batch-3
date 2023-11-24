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

//function example >> grades count

// var t_marks = 1100;
// var obt_marks= 900;

function result(t_marks, obt_marks){
    if(obt_marks>=1001){
        let r= (obt_marks/t_marks)*100;
        console.log("students passed with excellent marks and obtain grade is:" + r + "%");
        console.log("students passed with quality marks:" + obt_marks);    
    }
    if(obt_marks<1000 &&  obt_marks>=900){
        let r= (obt_marks/t_marks)*100;
        console.log("students passed with good marks and obtain grade is:" + r + "%");
        console.log("students passed with statisfied marks:" + obt_marks);    
    }else{
        console.log("students passed with average marks:" + obt_marks);    
    }
}

let sum=result(1100,1001);
// console.log("student got marks:" + sum);

//age finder through function
var brith_year = 1998;
var current_year= 2023;

function ageFinder(brith_year, current_date){
    let age = current_date - brith_year;
    if(age>=25 && age<=35){
        console.log("your body strength is at peak level and your age is:" + age);
    }else if(age>=35 && age<=45){
        console.log("your body strength level is going to decrease and your age is:" + age);
    }else{
        console.log(" you need to eat maximum level of protein and your age is:" + age);
    }
}
var t_age = ageFinder(brith_year, current_year);
// console.log(t_age);

//use of include 
const browserType = ["Google", "Facebook", "instagram", "threads", "gmail", "linkedin"];
if (browserType.includes("Gmail")) {
  console.log("Found gmail!");
} else {
  console.log("No google here!");
}

//startsWith and endsWith
const browseType = "mozilla";
if (browseType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//indexOf()

// const firstoccurence = "this is a learn javascript class, now we learn about indexOf() funcion";
const secondoccurence = ["Google", "Facebook", "instagram", "threads", "gmail", "linkedin"];
console.log(secondoccurence.indexOf("threads")); // 10

//slice()
var slice = "developers";
console.log(slice.slice(1,8));
console.log(slice.slice(8,2));//shows nothing this is incorrectly declare
console.log(slice.slice(-5, -2));
console.log(slice.slice(-5, -7)); // shows nothing is incorrectly declare
var array = "vik, john, silee, neon, daru";
console.log(array.slice(5, 23));
//substring
var str = "replace, slice, substr, substring, pad";
console.log(str.substring(7));
console.log(str.substring(7, 20));
//substr()
var subst = "replace, slice, substr, substring, pad";
console.log(subst.substr(7));
console.log(subst.substr(-7));

//uppercase() and lowerCase()
var lowerCase = "this is a world of UNDEFINED rules";
var uppercase = "THIS IS A WORLD OF UNDEFIENED rules";
console.log(lowerCase.toUpperCase());
console.log(uppercase.toLowerCase());
//trim()
var trim = "      this is a digital world           ";
console.log(trim);
console.log(trim.trim());
console.log(trim.trimEnd());
console.log(trim.trimStart());
//padStart() and padEnd()
var pad = "this";
console.log(pad.padStart(4, "0")); //pad a string until it will reaches the length 4
console.log(pad.padStart(20, "is")); //pad a string "is" until it will reaches the length 20
//charAt() and charCodeAt()
var char = "hello world!";
console.log(char.charAt(6));
console.log(char.charCodeAt(6));
//split(" ") and split(",") and split("|")
var split = "replace, slice, substr, substring, pad";
console.log( "srf split:", split.split()); 
console.log( "split on pipe:", split.split("|"));
console.log( "split on space:", split.split(" "));
console.log( "split on commas:", split.split(","));
console.log( "split on quotes:", split.split(""));



// //replace()
// var data = "this is drome";
// const updated = data.replace("d", "ch");
// console.log("misatake", data);
// console.log("updated version", updated);
// //replcaeAll()
// var quote = "to be or not to not be";
// var update = quote.replaceAll("be", "code");
// console.log(quote);
// console.log(update);
// //length()
// var sentence = "this is a script related code";
// console.log(sentence.length-1);

