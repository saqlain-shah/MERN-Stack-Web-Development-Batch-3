/* Foreach Method of Array */

var sampleNumber = [1, 2, 3, 4, 5];
var sampleAlphabet = ['a', 'b', 'c', 'd', 'e'];

console.log('For Sample Number');
sampleNumber.forEach((elem, index) => console.log(`${elem} comes at ${index}`));

console.log('For Sample Alphabet');
sampleAlphabet.forEach((elem, index) => console.log(`${elem} comes at ${index}`));

var complexNumAlpha = [1, 2, 3, ['a', 'b', 'c', 'd', 'e'], 5];
console.log('For Complex Number & Alphabet');
complexNumAlpha.forEach((elem, index) => console.log(`${elem} comes at ${index}`));