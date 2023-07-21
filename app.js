// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }
// console.log(sum(25, 652, 5632));
// console.log(Math.min);

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}
console.log(sum(35, 525, 656, 62, 25, 21, 3, 3, 5, 6, 59, 6));
console.log(sum(5, 6));

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE:${everyoneElse}`);
}
console.log(raceResults('Kate', 'Artur', 'David', 'Tom'));