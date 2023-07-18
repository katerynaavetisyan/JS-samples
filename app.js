// const prices = [1.99, 5.99, 4.56, 87, 54.21];
// const total = prices.reduce((total, price) => {
//     console.log('------------------')
//     console.log('total:', total)
//     console.log('price:', price)
//     console.log('------------------')
//     return total + price
// })
// console.log(total);

//

// let total2 = 0;
// for (let price of prices) {
//     total2 = total2 + price
//     console.log(total2);
// }
//  console.log(total2);

const wordsArr = ['Hello', 'my', 'name', 'is', 'Kate'];

let stringOfWords = wordsArr.reduce((allWords, words) => {
    return allWords + ' ' + words

});

console.log(stringOfWords);
//Hello my name is Kate 