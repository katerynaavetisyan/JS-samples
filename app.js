const square = x => {
  return x * x;
}
console.log(square(5));

const rollDie = () => (
  Math.floor(Math.random() * 6) + 1
)
console.log(rollDie());

const isEven = function (num) {
  return num % 2 === 0;
}
console.log(isEven(1));

const isEven2 = (num) => {
  return num % 2 === 0;
}
console.log(isEven2(6));

const isEven3 = num => {

}
console.log(isEven3(5));