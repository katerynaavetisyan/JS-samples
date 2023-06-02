//push - adds to the end
let pushArr = [1, 2, 3];
console.log('base: ', pushArr)
pushArr.push(4)
console.log("push: ", pushArr)

//pop - removes from the end
let popArr = [5, 6, 7, 8, 9]
console.log('base: ', popArr)
let removedNum = popArr.pop()
console.log('pop: ', popArr);
console.log('removedNum', removedNum)



let shiftArr = [4, 5, 6, 7, 8, 9]
console.log('base: ', shiftArr)
//shift - removes from the start
const removedNum2 = shiftArr.shift()
console.log('removedNum2:', removedNum2)
console.log('shift: ', shiftArr);

let unshiftArr = [4, 5, 6, 7, 8, 9, 10, 11]
console.log('base: ', unshiftArr)
// unshift - adds to the start
let myNum = 3
unshiftArr.unshift(myNum)
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
let newIndexOfArr = indexOfArr.indexOf('Milana')
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
console.log(sliceArr)



//splice - removes/replaces elements 

let spliceArr = ['Bingo', 'John', 'Rob']
console.log('base: ', spliceArr)
spliceArr.splice(2, 1, 'James', 'Max')
console.log('spliced: ', spliceArr)

let test = [1, 2, 3, 'htfrhtrfh', 4, 5, 6]
console.log('original: ', test)
test.splice(3, 0, 'hfhfhjfjfy')
console.log('result: ', test)


//sort - sorts an array 
let nums = [4, 0, 34, 90, 234]
function compareNumbers(a, b) {
    return b - a;
}
console.log('base: ', nums)
nums.sort(compareNumbers)
console.log('sorted: ', nums)

//map - method creates a new array populated with the results of calling a provided function on every element in the calling array.
let mapArr = [1, 4, 9, 16];
console.log('base: ', mapArr)
function multiplyByTwo(num) {
    return num * 2;
}
let newMapArr = mapArr.map(multiplyByTwo);
console.log('maped: ', newMapArr);



// forEach - method executes a provided function once for each array element
let forEachArr = ['a', 'b', 'c'];
console.log('base: ', forEachArr)
let newMappedArr = forEachArr.map(function (element, index, theArray) {
    // console.log("index", index);
    // console.log("element", element);
    // theArray[index] = "Kate";
    // console.log(theArray);
    return "Kate"
});
console.log('forEach result:', newMappedArr)