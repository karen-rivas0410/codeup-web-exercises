"use strict";


console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var userFavColor = prompt('Please enter your favorite color?');

alert('Great, I love' + ' '  + userFavColor + ' ' + 'too!');


// exercise three part one

var costPerDay = parseFloat(prompt('What is the cost per day in dollars'));

var littleMermaid = parseFloat(prompt('How many days will you rent Little Mermaid for?'));

var brotherBear = parseFloat(prompt('How many days will you rent Brother Bear for?'));

var hercules = parseFloat(prompt('How many days will you rent Hercules for?'));

var totalCost = (parseFloat(littleMermaid + brotherBear + hercules) * costPerDay);

alert('Your total rental Cost is $' + totalCost.toFixed(2));


// EXERCISE THREE PART TWO//


