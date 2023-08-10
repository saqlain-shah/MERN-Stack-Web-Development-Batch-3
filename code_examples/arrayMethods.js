/* Foreach Method of Array */

var sampleNumber = [1, 2, 3, 4, 5];
var sampleAlphabet = ['a', 'b', 'c', 'd', 'e'];

console.log('Foreach Metthod of Array For Sample Number');
sampleNumber.forEach((elem, index) => console.log(`${elem} comes at ${index}`));

console.log('Foreach Metthod of Array For Sample Alphabet');
sampleAlphabet.forEach((elem, index) => console.log(`${elem} comes at ${index}`));

var complexNumAlpha = [1, 2, 3, ['a', 'b', 'c', 'd', 'e'], 5];
console.log('Foreach Metthod of Array For Complex Number & Alphabet');
complexNumAlpha.forEach((elem, index) => console.log(`${elem} comes at ${index}`));

/* Filter Method of Array */

var simpleNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Filter Metthod of Array For Odd Number from 1-10');
var result = simpleNumber.filter(elem => elem %2);
console.log(result);

var simpleAlphabets = ['A', 'B', 'C', 'D', 'E', 'F'];

var result = simpleAlphabets.filter(elem => elem == 'D' );
console.log(result);
