// function wait() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() {
//             resolve('You\'ll see this after 1 second')
//         }, 1000);
//     });
// };

let request = wait();
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


fetch(url, {headers: {'Authorization': 'token 8922d82b9f52faa7c36314d3b6f888d8e179e7fe'}})
