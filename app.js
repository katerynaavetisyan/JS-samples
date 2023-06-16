const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
}
const person2 = {
    firstName: 'Anna',
    lastName: 'Johnson',
    age: 30,
}

//print person1 first name one time
//console.log(person1.firstName)
//correct

//update person1 first name to Tom
// person1.firstName = 'Tom'
//console.log(person1)
//correct

// //person1 is 2 years elder now. Need to udpate age property.
// person1.age = 35
// console.log(person1.age)

//add new key/value pair to object person1: 
//  key: yearOfBirth
//  value: 1988
// person1.yearOfBirth = 1988
//console.log(person1)

//create a function printTwoNums that accepts two params: num1 and num2
//and prints:
//  num1 is: 
//  num2 is: 
function printTwoNums(num1, num2) {
    console.log('num1 is:', num1)
    console.log('num2 is:', num2)
}
// printTwoNums(3, 5)

//create a function numberChecker
//function accepts one parameter num
//if num is more then 10 print: number you entered is larger than 10
//if num is less than 10 print: number is lesser than 10
//if num is 10 print: number you entered is 10.
function numberChecker(num) {
    if (num > 10) {
        console.log('number you entered is larger than 10')
    } else if (num < 10) {
        console.log('number is lesser than 10')
    } else {
        console.log('number you entered is 10')
    }
}
// numberChecker(9)

//function married accepts two objects(husband and wife)
//and updates wife's last to husband's last name
//also adds key/value pair:
//  key: isMarried
//  value: true
function married(husband, wife) {
    wife.lastName = husband.lastName;
    husband.isMarried = true;
    wife.isMarried = true;
    // console.log(husband)
    // console.log(wife)
}
married(person1, person2)


//create variables for all data type. Values can be anything as
//long as data type is correct. Print each data type of those
//variables

let numbers = [1, 2, 3, 4, 5, 6]
console.log(typeof numbers)


let updatedNumbers = numbers.map((number) => number + 2)
let updatedNumbers2 = numbers.map(function (number) {
    return number + 20;
})
function sumNums2(num1, num2) {
    return num1 + num2;
}
console.log(updatedNumbers2);



let numberVar = 2;
console.log(typeof numberVar)


let boolean = true
console.log(typeof boolean)


let nullVar = null
console.log(typeof nullVar)


let bird = "dove"
console.log(typeof bird)


let undefinedVar = undefined
console.log(typeof undefinedVar)


let Anna = {
    age: 33,
    mood: 'happy'
}
console.log(typeof Anna)


let nanType = NaN;
console.log(typeof nanType);





//create a function `printFirstNameNumberOfTimes`
//function has to accept two parameters:
// 1. person object like `person1`
// 2. number of times first name is printed(console.log) 
//example: printFirstNameNumberOfTimes(person1, 3)
//resunt: 
//  fist name is John
//  fist name is John
//  fist name is John

//create person2 object with new info 
//and run printFirstNameNumberOfTimes for person1 and person2


// function printFirstNameNumberOfTimes(person, numberOfTimes) {
//     for (i = 0; i < numberOfTimes; i++) {
//         console.log(`Frist name is ${person.firstName}`)
//     }
// }

// printFirstNameNumberOfTimes({
//     firstName: 'Artur'
// }, 1)


//createa a function `updateFirstName` that accepts two params:
//person object like person1
//new newFirstName - string
//function updates/changes old firstName to newFirstName 
//and returns updated object