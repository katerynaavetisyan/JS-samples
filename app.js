


// //pop - removes from the end
// let popArr = [5, 6, 7, 8, 9]
// console.log('base: ', popArr)
// numbers.pop()
// console.log('pop: ', popArr);


let shiftArr = [4, 5, 6, 7, 8, 9]
console.log('base: ', shiftArr)
//shift - removes from the start
shiftArr.shift()
console.log('shift: ', shiftArr);

let unshiftArr = [4, 5, 6, 7, 8, 9, 10, 11]
console.log('base: ', unshiftArr)
// unshift - adds to the start
unshiftArr.unshift(3)
console.log('unshift: ', unshiftArr)



// concat - merge arrays
let names = ['Kate', 'Artur']
let numbers = [1, 2, 3, 4, 5]
console.log('base: ', names, numbers)
let numNames = numbers.concat(names)
console.log('concat: ', numNames)

//includes - look for a value   
numNames.includes(2)
true

//indexOf - returns the first index at which a given element can be found 
let indexOfArr = ['Milana', 'Ava']
console.log('base: ', indexOfArr)
let newIndexOfArr = indexOfArr.indexOf('M')
console.log('indexOf: ', newIndexOfArr)

//join - creates a string from an array 
let joinArr = ['Fire', 'Air', 'Water'];
console.log('base: ', joinArr)
let newJoinArr = joinArr.join('-')
console.log('joined: ', newJoinArr);

//reverse - reverses an array 
let reverseArr = ['happy', 'sad', 'lovely']
console.log('base: ', reverseArr)
reverseArr.reverse()
console.log('reversed: ', reverseArr)

//slice - copies a portion on an array
let sliceArr = ['Anna', 'Maria', 'Zhanna', 'Hanna', 'Donna']
console.log('base: ', sliceArr)
let newsliceArr = sliceArr.slice(2, 4)
console.log('sliced: ', newsliceArr)

//splice - removes/replaces elements 
let spliceArr = ['Bingo', 'John', 'Rob']
console.log('base: ', spliceArr)
spliceArr.splice(2, 1, 'James', 'Max')
console.log('spliced: ', spliceArr)

//sort - sorts an array 
let nums = [4, 0, 34, 90, 234]
console.log('base: ', nums)
nums.sort()
console.log('sorted: ', nums)

//map - method creates a new array populated with the results of calling a provided function on every element in the calling array.
let mapArr = [1, 4, 9, 16];
console.log('base: ', mapArr)
let newMapArr = mapArr.map(x => x * 2);
console.log('maped: ', newMapArr);



// forEach - method executes a provided function once for each array element
let forEachArr = ['a', 'b', 'c'];
console.log('base: ', forEachArr)
forEachArr.forEach(element => console.log(element));
console.log 