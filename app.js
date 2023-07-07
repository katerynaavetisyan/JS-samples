

// function lastElement(arr) {
//     if (arr.length === 0) {
//         return null;
//     } else {
//         return arr[arr.length - 1];
//     }
// }

let testArr = [1]

console.log(testArr[testArr.length - 2]);

// SOLUTION #2:

// function lastElement(arr) {
//     if (!arr.length) {
//         return null;
//     }
//     return arr[arr.length - 1];
// }

// // Or we can write it like this:
// function lastElement(arr) {
//     if (!arr.length) return null;
//     return arr[arr.length - 1];
// }
// SOLUTION #3:

// function lastElement(arr) {
//     if (arr.length > 0) {
//         return arr[arr.length - 1];
//     }
//     return null;
// }

// // Or we can write it like this:
// function lastElement(arr) {
//     if (arr.length > 0) return arr[arr.length - 1];
//     return null;
// }
// SOLUTION #4:

// // Using the JavaScript ternary operator syntax
// function lastElement(arr) {
//     return arr.length > 0 ? arr[arr.length - 1] : null;
// }

// // Another approach:
// // arr.length will be 'truthy' if it's not 0, so we can write this:
// function lastElement(arr) {
//     return arr.length ? arr[arr.length - 1] : null;
// }

