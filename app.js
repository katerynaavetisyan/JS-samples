const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total);

const total = prices.reduce((total, price) => {
    return total + price
})
console.log(total);

const total2 = prices.reduce((total2, price) => total2 + price)
console.log(total2);

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
console.log(minPrice);