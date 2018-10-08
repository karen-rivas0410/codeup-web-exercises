// (function () {

"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var enterNum = Number;
// confirm ('Would you like to enter your number?');
//
//
// if (enterNum === Number) {
//     prompt('Please enter your number!');
// } else if(enterNum % 2 === 0) {
//     alert("it is even")
// }
//  else if (enterNum + Number(100)) {
//     alert('it is odd?')}
// else if (enterNum >= Number(-1)){
//     alert('it is positive');
// } else {
//     alert('it is negative!');
// }
// console.log(enterNum);
//
//
// if (enterNum === isNaN(enterNum)) {
//     alert('is not a number!')
// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(string) {
//
//     if (string === ('blue')) {
//         alert('Blue is the color of the sky!');
//     } else if (string === ('red')) {
//         alert('Strawberries are red!')
//     } else if (string === ('cyan')){
//         alert("I don't know anything about cyan!");
//     } else {
//         alert('Not defined!!!!!!')
//     }
//     return string;
// }
// console.log(analyzeColor(randomColor));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
 // * Pass the `randomColor` variable to your function and console.log the results.
 // * You should see a different message everytime you refresh the page
 // */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
//
// var newColor = prompt("Please Enter your Color?");
//
// function analyzeColor(newColor) {
//
//     switch(newColor) {
//         case "blue":
//             alert('Blue is the color of the sky!');
//             break;
//         case "red":
//             alert("Strawberries are red!");
//             break;
//         case "cyan":
//             alert("I don't know anything about cyan!");
//             break;
//         default:
//             alert(newColor + " is Not defined!");
// }
//     return newColor;
// }
//
// analyzeColor(newColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var customerColor = prompt('Please enter your color');
//
//
// function analyzeColor(customerColor) {
//
//     switch(customerColor) {
//         case "blue":
//             alert('Blue is the color of the sky!');
//             break;
//         case "red":
//             alert("Strawberries are red!");
//             break;
//         case "cyan":
//             alert("I don't know anything about cyan!");
//             break;
//         default:
//             alert(customerColor + "Not defined!");
//     }
//     return customerColor;
// }
//
// analyzeColor(customerColor)


// function analayzeColor(customerColor) {
//     alert(customerColor);
//     return customerColor;
// }

// analayzeColor(customerColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var luckyNumber = Math.floor(Math.random() * 6);


function calculateTotal(luckyNumber,percentage) {
    var output;
    output = (luckyNumber * percentage) * parseFloat(100);
    return output;
}
   // console.log(output);

//     if (luckyNumber) {
//         alert(luckyNumber);
// }

calculateTotal(4,.10);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6



// })()
