// (function () {

"use strict";


// ================ SIMPLE FUNCTION DRILLS

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

// function returnTwo(number) {
//     return number = 2;
//
// }
//     console.log(returnTwo('8'));

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

// function returnName(stringInput) {
//     // var output;
//     // output = stringInput
//     // return output;
//     return stringInput;
// }

// console.log(returnName('karen'));

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

// function addThree(numInput) {
//     // var output;
//     // output = numInput + Number(3);
//     // return output;
//     return numInput + Number(3);
//
// }
//
// console.log(addThree(8));

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

// function sayString(stringInput) {
//     var output;
//     output = stringInput;
//     return output;
//     // return stringInput;
// }
//
// console.log(sayString('Hello my name is Karen'));

// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value

// function sayHowdy() {
//     var output;
//     output = ('Howdy!');
//     return output;
//     // return string;
// }
// console.log(sayHowdy());

// function sayHowdy(input) {
//     return input = ("Howdy!");
// }
//
// console.log(sayHowdy());

// ================ CHALLENGE FUNCTION DRILLS

// Write a function called `identity(input)` that takes in an argument called input and returns that input.

// function identity(name) {
//     return name
// }
// console.log(identity('jason'));

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(getRandomInt(4, 20));

// Write a function called `first(input)` that returns the first character in the provided string.

// function first(input) {
//     var output;
//     output = input.substring(0,1);
//     return output;
// }
//
// console.log(first('karen'));

// Write a function called `last(input)` that returns the last character of a string

// function last(input) {
//     var output;
//     output = input.substring(input.length - 1);
//     return output;
// }
//
// console.log(last('Joseph'));

// Write a function called `rest(input)` that returns everything but the first character of a string.

// function rest(input) {
//     var output;
//     output = input.substring(1);
//     return output;
//
// }
//
// console.log(rest('hello'));

// Write a function called `reverse(input)` that takes a string and returns it reversed.


// function reverse(input) {
//     if (input.length <= 1) {
//         return input;
//     }
//     return reverse(input.substr( 1 ) ) + input[ 0 ];
// }
//
// console.log(reverse('mynameiskaren'));

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

// function isNumeric(input) {
// //     var output;
// //     output = isNaN(input);
// //     return output;
// //
// // }
// //
// // console.log(isNumeric(3453));

// Write a function called `count(input)` that takes in a string and returns the number of characters.

// function count(input) {
//     var output;
//     output = input.length;
//     return output;
//
// }
//
// console.log(count('mynameisbob'));

// Write a function called `add(a, b)` that returns the sum of a and b

// function add(a,b) {
//     var output;
//     output = (a + b);
//     return output;
//
// }
//
// console.log(add(2045,20));

// Write a function called `subtract(a, b)` that return the difference between the two inputs.

// function subtract(a,b) {
//     var output;
//     output = (a - b);
//     return output;
//
// }
//
// console.log(subtract(2287, 277));

// Write `multiply(a, b)` function that returns the product

// function multiply(a,b) {
//     var output;
//     output = (a * b);
//     return output;
//
// }
//
// console.log(multiply(367,40));

// Write a divide(numerator, denominator) function that returns a divided by b

// function denominator(a,b) {
//     var output;
//     output = (a / b);
//     return output;
//
// }
//
// console.log(denominator(4, 40));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

// function remainder(number,divisor) {
//     var output;
//     output = number % divisor;
//     return output;
//     // return number % divisor;
//
// }
//
// console.log(remainder(10, 4));

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

// function square(a) {
//     var output;
//     output = a ** a;
//     return output;
//
// }
//
// console.log(square(2));


// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and
// your square function and not + or * operators

// function sumOfSquare(a,b) {
//     var output;
//     output =
//
// }

// Write a function called doMath(operator, a, b) that takes 3 parameters.
// The first parameter is the name of the math function you want to apply.
// a and b are the two numbers to run that function on.

// function doMath(operator, a, b) {
//     var output;
//     output = operator(a,b);
//     return output;
//
// }
//
// console.log(doMath());
// })()
