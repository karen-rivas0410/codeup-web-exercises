const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//  let threeLanguages = users.filter((user) => user.languages.length >= 3);                         //remember has to be greater than OR equal to. if using one parameter ony need one pair of parenthesis!!
// console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address

// let userEmail = users.map((user) => user.email);
// console.log(userEmail);


// Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.


let totalYearsOfExperience = users.reduce((accumulator, currentValue) => accumulator + currentValue.yearsOfExperience, 0); //use previous, current
console.log(totalYearsOfExperience);
let getAverage = totalYearsOfExperience / users.length;  ///instead of 5 use the .length
console.log(getAverage);


// Use reduce to get the longest email from the list of users.

let longestEmail = users.reduce((accumulator , currentValue) => {
    if (accumulator.length < currentValue.email.length) {
        return currentValue.email
    } else  {
        return accumulator  //dont really need the else part here
    }

}, "");


// let email = users.reduce(longestEmail, currentValue) =>
// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


let initialValue = "";

let singleString = users.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.name + ','
}, initialValue);

nameString = nameString.substring( 0, nameString.length-2) + ".";


    ///Bonus// LOOK INTO SET AND FROM//

let languages = users.reduce((accumulator, user) => {
    user.languages.map(language => {
        accumulator.push(language);
    });
    return accumulator;
}, []);

languages  = new Set(languages);
languages = Array.from(languages);

console.log(languages);