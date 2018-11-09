// let wait = (delay) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() {
//             resolve(`You'll see this after ${delay/ 1000} second`)
//         }, delay); ///this can be a number and array or whatever needs to be passes on
//     });
// };

// wait(1000).then((data) => {
// console.log(data); //if we define a parameter in the function we can pass that into out resolve function
// wait(3000).then((data) => {
// console.log(data));


  // username = prompt("What is your github username");

// fetch(`https://api.github.com/users/${username}`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// what's going on?
// fetch returns a promise, so we need a .then
// response.body is a readable bitstream, which means we need a second .then to handle the promise resolved when the stream is completely loaded

// let gitHub = fetch('https://api.github.com/users', {headers: {'Authorization': 'token 8922d82b9f52faa7c36314d3b6f888d8e179e7fe'}});
//
// let getUsername = new Promise((resolve) => resolve('username'));
//     gitHub.then(() => console.log('do this'));

const githubApiBaseUrl ='https://api.github.com';
const token =
const options = {

};

    const mostRecentCommit = (username) => {
        const userEventsEndpoint = `/users/${username}/events/public`;
        return fetch(githubApiBaseUrl + userEventsEndpoint, options)
    };

    getMostRecentCommit("karen-rivas0410");
        .then((data) => data.json()) //this can be moved into the function with the promise to make it more readable
        .then((data) => { //we need the .then to return something from the promise
            console.log(data)
        };

//STEPS//
// find most recent push event of a user
// find the url of the repository pushed to from their most recent push event
// find the most recent commit on that repo by the user



