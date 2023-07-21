const feline = { legs: 4, family: 'Felidae' }
const canine = { family: 'Caninoe', furry: true }

const dogs = { ...canine, isPet: true }
console.log(dogs);

const lion = { ...feline, genus: 'Panthera' }
console.log(lion);

const catDog = { ...feline, ...canine }
console.log(catDog);