const square = (x) => {
  return x * x;
}
console.log(square(63));


const sum = (x, y) => {
  return x + y;
}
console.log(sum(5, 4));

const add = (x, y) => {
  return x + y;
}
console.log(add(4, 9));


const rollDie = () => {
  return Math.floor(Math.random() * 5) + 1
}
console.log(rollDie());

const square2 = num => {
  return num * num;
}
console.log(square2(35));

const greet = (name) => {
  return `Hey ${name}!`;
}
console.log(greet('Anna'));


const greet2 = name => `Hey ${name}!`;

console.log(greet2('Maria'));


