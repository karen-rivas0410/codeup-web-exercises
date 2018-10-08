"use strict";
    // takes in a string and returns true if the string contains  "a" and false if it does not; test the function
    //input: take in string
    //output: true or false
    //processes: find a; true
    // make sure input name is a bit semantic or descriptive.

function hasLetterA(input) {
    var output;
    output = input.indexOf('a') !== -1; //or you can >=0 you are looking for the number
    return output;

}
console.log(hasLetterA('cat'));

(function() {

})();