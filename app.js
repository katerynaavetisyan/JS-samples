function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log(('Congratulations, you won a million dollars!'));
        }
    } else {
        return function () {
            alert('You got infected by virus!')
        }
    }
}







function isBetween(num) {
    return num >= 50 && num <= 100
}
console.log(isBetween(95));
console.log(isBetween(32));
console.log(isBetween(56));


function isBetween2(num) {
    return num >= 1 && num <= 10
}
console.log(isBetween2(2));
console.log(isBetween2(12));







function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18)

console.log(isChild(40));
console.log(isChild(15));


const isAdult = makeBetweenFunc(19, 64)

console.log(isAdult(40));
console.log(isAdult(69));


const isSenior = makeBetweenFunc(65, 120)

console.log(isSenior(56));
console.log(isSenior(78));