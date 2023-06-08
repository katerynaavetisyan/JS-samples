
// //map - method creates a new array populated with the results of calling a provided function on every element in the calling array.
// let mapArr = [1, 4, 9, 16];
// console.log('base: ', mapArr)
// function multiplyByTwo(num) {
//     return num * 2;
// }
// let newMapArr = mapArr.map(multiplyByTwo);
// console.log('maped: ', newMapArr);



// // forEach - method executes a provided function once for each array element
// let forEachArr = ['a', 'b', 'c'];
// console.log('base: ', forEachArr)
// let newMappedArr = forEachArr.map(function (element, index, theArray) {
//     // console.log("index", index);
//     // console.log("element", element);
//     // theArray[index] = "Kate";
//     // console.log(theArray);
//     return "Kate"
// });
// console.log('forEach result:', newMappedArr)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = []
// function multipliedByTwo(number) {
//     return number * 10;
// }
// for (i = 0; i < numbers.length; i++) {
//     result.push(multipliedByTwo(numbers[i]))
// }
// console.log(result)


// console.log(element)


// let names = ['Artur', 'John', 'Max', 'Alex']
// for (i = 0; i < names.length; i++) {
//     return names++
// }


// for (i = 0; i < numbers.length; i++) {
//     let oldElement = numbers[i]
//     let newElement = multipliedByTwo(oldElement)
//     numbers[i] = newElement
//     numbers[i] = multipliedByTwo(numbers[i])
// }
// console.log(numbers)



/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  // * @param {number} arraySize - size of array 
  // * @param {?} value - value to fill 
  // * @returns {Array} 
*/
// const fill = (arraySize, value) => {
//     let resultArray = []
//     for (i = 0; i < arraySize; i++) {
//         resultArray.push(value)
//     }
//     return resultArray
// }
// const data = 2;
// const valueToFill = 'b';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']


function sortThreeNumbers(num1, num2, num3) {
  return [num1, num2, num3].sort();
}
const sortedNumbers = sortThreeNumbers(3, 6, 4);
console.log(sortedNumbers);

const secondSortedNums = sortThreeNumbers(5, 1, 3)
console.log(secondSortedNums);

