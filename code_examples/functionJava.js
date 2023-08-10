/* Dollar To Rupees Converter Starts*/
var dollar = 0;
var rupees = 0;

function moneyConverter (dollar, rupees){
    
    rupees = 280 * dollar;
    return rupees;
}


dollar = 10;
rupees = 0;

let converted = moneyConverter (dollar, rupees);

console.log(dollar , rupees);
console.log('The converted dollar into rupee is:'+ converted);

/* Dollar To Rupees Converter Ends*/

/* Applying Function to an Array*/

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log( myArray);
console.log(madeAString);

/* Calling Random Function */
function random(number) {
    return Math.floor(Math.random() * number);
}
var unknownNumber = random(5)
console.log(unknownNumber);

/*Printing Message*/
function greetings(string){
    return "Welcome to JavaScript " + string;
}

let trainee = greetings('Saleem');
console.log(trainee);

/* String Function */
const myText = "I am a string";
const newString = myText.replace("string", "text");
console.log(newString);



