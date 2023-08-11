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