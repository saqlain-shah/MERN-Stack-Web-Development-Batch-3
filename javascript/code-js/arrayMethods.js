 //ARRAY METHODS
  //array can be created using constructor if parameter is number it acts as empty slot 
const arrayEmpty = new Array(2);
console.log(arrayEmpty.length);
console.log(arrayEmpty[0]);
//array can be created using constructor if parameter is string it do not take empty slot it acts as string
const arrayofOne = new Array("2");
console.log("array of one string\n", arrayofOne.length);
console.log(arrayofOne[0]);

const arrayofTwo = new Array("sameer", "malik");
console.log("\n array constructor of two string parameter",arrayofTwo.length);
console.log(arrayofTwo[0]);

 //at() methods
const array1 = [5, 12 ,120, 33, "sameer", 80];
// const index = array1.length
var index = 6;
var index = index - array1.length; // length may be written with indexing or direction as length -2 
if(index<=array1.length){
    console.log(`using of index ${[index]} the item returned is ${array1.at([index])}`);
}else{
    console.log(`there is no item as index ${index}`)
 }
 // array items and function return a last value/index
 const cart = ["apple", "banana", "pear"];
 function returnLast(arr){
         return arr.at(-1);
 }
  const item1 = returnLast(cart);
 console.log(item1);

// //push() method
const item2 = cart.push("orange");
console.log(cart);
console.log(cart.at(-1));// instead of this we use fucntion here
const item3 = returnLast(cart); //here a fucntion for at method
console.log(item3);

//slice(), lenght, and at() differences
//lenght
const color = ["red", "green", "blue"];
const lengthWay = color[color.length -3];
// const lengthWay = color.length;
console.log("\n",lengthWay);
 //slice() array is returned
 const sliceWay = color.slice(-3,-1); //new array 
console.log(sliceWay);
console.log(sliceWay[1]); //access by giving indexing
 //at() method
const atWay = color.at(2);
console.log(atWay);

//using at() for non-array object
const arraylike = {
    length: 4,
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e"
}
// console.log(Array.prototype.at.call(arraylike, 3));

//concat() methode 
const arr1 = [[0], 1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10,[11,12]];
const arr3 = (arr1.concat(arr2)); //new array holds both array values
// const arr3 = (arr1.concat("sam",["x","y","z"] ));//new array holds both array values
// const arr3 = (arr1.concat(arr2, another array));//new array holds both array values
// console.log("\n arr3:",arr3)

arr1[0].push(1);
arr2[5].push(14,15)
// console.log(arr3);

// console.log([1, ,3].concat([4,5]));
// //entries() method
const interator = arr1.entries();
// console.log(interator.next().value)
// console.log(interator.next().value)

// using for loop gives same result from above
for (const element of interator ){
    // console.log(element);
}

//map() method

// const mapArray = [2, 4, 6, 8, 10, 12, 14];
// const len = console.log("\n map array starts here length:",mapArray.length) ;
// const map1 = mapArray.map((x, y) => {
//     let z = x * len;
//     return z ;
//    let y = mapArray[0];

// });
// console.log(map1);

//map() method
const arr = [5, 10, 15, 20, 25, 30];
const newMap = arr.map(function(value, i, arr){
  value++;
  console.log(`array index ${[i]} array value ${[value]}` );

});
console.log(arr);

const newone = arrayOne.map(function(value){
  value++;
});
console.log(newone);
var arrayOne = [1, 2, 3];
