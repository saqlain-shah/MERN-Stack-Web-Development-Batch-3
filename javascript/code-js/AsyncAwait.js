// code practice file
// async function test (){
//     return "async without arrow function";
// }
// test().then((result) => {
//     console.log(result);
// })
//same as above code us arrow reduce the code as much more
let test = async () => "hello Async with arrow";//use arrow function 
test().then((a)=>{
    // console.log(a);
});

// async and await function

async function asyncFunction(){
    // await console.log("2 : second run");
    //  console.log("3 : third run");
    //   console.log("4 : four run");

}
// console.log("1 : first run");
asyncFunction();
// console.log("5 : five run");

// fetch data example

async function test1(){
    setTimeout( ()=>{
        console.log("after 3 second it will compile");
    },3000)
    console.log("before the await");
    console.log("2 : message");
    const response = await console.log("hello await...");
    console.log("4: message");
    // const students = await response.json();
    return response;
}
console.log("1: message");
console.log(test1());
console.log("after the async function");