const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubles = numbers.map(function (num) {
  return num * 2;
})
console.log(doubles);

const texts = ['lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();

})
console.log(texts);
console.log(caps);