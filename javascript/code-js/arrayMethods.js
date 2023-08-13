//map() method
//callback function takes three parameter array value, array index no, array
//one parameter is mandatory
const array = [2, 4, 6, 8, 10];
const newArray = array.map(function(value){
  value++;
  return value;
})
console.log(array);
console.log(newArray);
//with arrow function 
const array1 = [2, 4, 6, 8, 10];
const newArray11 = array.map((val, i) => i );//arrow reduce the code in single line as compare to above
console.log(array1);
console.log(newArray11);
//map() array with objs
const arr = [
  {trainee: "iqbal", years: "30"},
  {trainee: "rafiq", years:"25"},
  {trainee: "maisam", years: "26"},
  {trainee: "saleem", years: "27"}
]
// const maptrainee = arr.map(({trainee, years}) => ({[trainee] : years}));
const maptrainee = arr.map(function(traineedata){
   return traineedata.trainee;
  //return traineedata.years; 
})
console.log("\n",arr);
console.log(maptrainee);

//filter() method
// filter method gives a new array from existing array filter the portion of array which fullfill the callback function
const Array = ["sam", "iqbal", "maisam", "shahzab", "suhail", "john"];
const filteredArray = Array.filter(data => data.length >6 ); //arrow function
console.log("\n filter applying",filteredArray);
console.log(Array);

//filter with function
function filterFunction(value){
   if(value==="john"){
    return value;
   }
}
const arry =[12, 9, 11, 8, 7, 3, "sam", "john"]
const filtered = arry.filter(filterFunction);

console.log("\n new filter array with function:",filtered);
console.log(arry);

//reduce()method
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.reduce((sum, num) => sum + num);
console.log("\n sum of the array:",result);

//foreach() method 

const foreachArray =[1, 3, 5, /*empty */, 6];
const newArr = [];
foreachArray.forEach((element) =>{
  newArr.push("sam"); //length is same as above array 
})
console.log(foreachArray);
console.log(newArr);

var myArr = [1,2,3,4];
myArr.forEach(function(elem){
  if (elem === 3) {
       return true;
    // Go to "next" iteration. Or "continue" to next iteration...
  }
  console.log(elem);
});

const words = ["one", "two", "three", "four"];
words.forEach((word) =>{
  console.log(word);
  if(word=== "two"){
    words.shift();// means deleting a string from array
  }
})
console.log(words);
