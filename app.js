const testScores = {
    bob: 32,
    tom: 97,
    hanna: 96,
    kate: 98
}
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
console.log(Object.keys(testScores))
console.log(Object.values(testScores))
console.log(Object.entries(testScores))

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);