let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (true) {
    guess = Math.floor(Math.random() * 10);
    if (guess === targetNum) {
        console.log(`correct! Guessed: ${guess} & target was: ${targetNum}`)
    }
    else {
        console.log(`Guessed ${guess}...Incorrect!`);
    }
}


let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "Stop coping me")
        break;

}
console.log('Ok you win!');