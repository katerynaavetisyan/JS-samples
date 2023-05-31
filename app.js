// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// const firstNames = fullNames.map(function (person) {
//     return person.first;
// })

// const x = 3

// if (x > 3 || x == 3) {
//     console.log(x > 3)
//     console.log("if block")
// } else {
//     console.log(x < 3)
//     console.log("else block")
// }


function getColor(phrase) {

    if (phrase === 'stop') {
        console.log('red')
    } else if (phrase === 'slow') {
        console.log('yellow')
    } else if (phrase === 'go') {
        console.log('green')
    } else {
        console.log('purple')
    }
}