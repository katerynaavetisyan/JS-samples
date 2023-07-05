// let count = 0;
// while (count <= 10) {
//     console.log(count)
//     count++;
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(i, "while");
// }

const SECRET = 'Slava Ukraini';
let guess = prompt('Enter the secret code...');
while (guess !== SECRET) {
    guess = prompt('enter the code...');
}
console.log('Congrats you got the secret!!!');