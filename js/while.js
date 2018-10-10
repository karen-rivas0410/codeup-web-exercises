"use strict";


var x = 2;

while (x <= 65536) {
    console.log(x);
    x *= 2;
}


/////////////////////////////////////////


// This is how you get a random number between 50 and 100
// This expression will generate a random number between 1 and 5
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log('I now have ' + allCones + "cones" );
    if (conesSold <= allCones) {
        allCones = allCones - conesSold;
        console.log('I now have ' + allCones + " left.");
    } else {
        console.log("I'm sorry, there's not enough for you!")
    }

} while (allCones > 0);
    console.log("Yay! I sold them all");


    //Math.ceil(Math.random() * 5); is another way to randomly get a number including from 1-5//