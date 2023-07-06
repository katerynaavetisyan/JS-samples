
function printHeart() {
    console.log('<3');
}
printHeart()

function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}
singSong()


function greeting() {
    console.log('Hi');
}
greeting()

function greet(person) {
    console.log(`Hi, ${person}`);
}
greet('Tom')

function welcome(firstName) {
    console.log(`firstName is: ${firstName}`);
}
welcome('Kate')

function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

rant('I love you!')

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

function greetGuest(firstName, lastName) {
    console.log(`Hey there, ${firstName}, ${lastName[0]}.`);
}

greetGuest('Kateryna', 'Avetisyan')

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
repeat('Happiness     ', 10)

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!');
    }
}


function add(x, y) {
    console.log(x + y)
}
add(8, 8)



function adding(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}

console.log(adding(4, "tewst"));


function multiply(x, y) {
    return x * y;

}
console.log(multiply(5, 4));

function isShortsWeather(temperature) {
    return temperature >= 75;
}
let array = [3, 5, 7];

function lastElement(array) {
    return array.length ? array[array.length - 1] : null;
}




SOLUTION #1:

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}
SOLUTION #2:

function lastElement(arr) {
    if (!arr.length) {
        return null;
    }
    return arr[arr.length - 1];
}

// Or we can write it like this:
function lastElement(arr) {
    if (!arr.length) return null;
    return arr[arr.length - 1];
}
SOLUTION #3:

function lastElement(arr) {
    if (arr.length > 0) {
        return arr[arr.length - 1];
    }
    return null;
}

// Or we can write it like this:
function lastElement(arr) {
    if (arr.length > 0) return arr[arr.length - 1];
    return null;
}
SOLUTION #4:

// Using the JavaScript ternary operator syntax
function lastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : null;
}

// Another approach:
// arr.length will be 'truthy' if it's not 0, so we can write this:
function lastElement(arr) {
    return arr.length ? arr[arr.length - 1] : null;
}


SOLUTION #1:

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
SOLUTION #2:

// A bit more explicit solution:
function capitalize(word) {
    const firstLetterCapitalized = word[0].toUpperCase();
    const restOfTheString = word.slice(1);
    return firstLetterCapitalized + restOfTheString;
}

SOLUTION #1:

function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
SOLUTION #2:

function sumArray(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

