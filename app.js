
let a = prompt('Enter a number');

if (a === '3') {
    console.log("a is 3");
} else if (a === '4') {
    console.log("a is 4");
} else {
    console.log("a is neither 3, nor 4");
}

if (x === 3) {                          // Example 1
    console.log("x is 3");
}

if (x === 3) {                          // Example 2
    console.log("x is 3");
} else {
    console.log("x is NOT 3");
}

if (x === 3) console.log("x is 3");     // Example 3

if (x === 3)                            // Example 4
    console.log("x is 3");

if (x === 3)                            // Example 5
    console.log("x is 3");
else
    console.log("x is NOT 3");

if (x === 3) {                          // Example 6
    console.log('x is 3');
} else {
    if (x === 4) {
        console.log('x is 4');
    } else {
        console.log('x is NOT 3 or 4');
    }
}

if (x === 3) {                          // Example 7
    console.log("x is 3");
} else if (x === 4) {
    console.log("x is 4");
} else {
    console.log('x is NOT 3 or 4');
}

if (x === 3)
    console.log('x is 3');
console.log('x is an odd number');
  > 5 === 4
= false

    > 'abc' === 'abc'
= true

    > 'abc' === 'abcd'
= false

    > 'abc' === 'aBc'
= false

    > '5' === '5'
= true

    > '5' === '6'
= false

    > 5 === '5'
= false

    > '' === 0
= false

    > 5 !== 5
= false

    > 5 !== 4
= true

    > 4 !== 156
= true

    > 'abc' !== 'def'
= true

    > 'abc' !== 'aBc'
= true

    > 5 !== '5'
= true

    > 5 == 5
= true

    > 5 == 4
= false

    > 5 == '5'
= true

    > '' == 0
= true



    > 5 != 5
= false

    > 5 != 4
= true

    > 5 != '5'
= false

    > '' != 0
= false


    > 4 < 5
= true

    > 5 < 4
= false

    > 5 < 5
= false

    > "4" < "5"
= true

    > "42" < "402"
= false

    > "42" < "420"
= true

    > "42" < 420
= true


    > 4 > 5
= false

    > 5 > 4
= true

    > 5 > 5
= false

    > "4" > "5"
= false

    > "42" > "402"
= true

    > "42" > "420"
= false

    > "42" > 420
= false

    > 4 <= 5
= true

    > 5 <= 4
= false

    > 5 <= 5
= true


    > 4 >= 5
= false

    > 5 >= 4
= true

    > 5 >= 5
= true



    > !true
= false

    > !false
= true

    > !(4 === 4)
= false

    > !(4 !== 4)
= true


    > true && true
= true

    > true && false
= false

    > false && true
= false

    > false && false
= false

    > (4 === 4) && (5 === 5)
= true

    > (4 === 4) && (5 === 6)
= false

    > (4 === 5) && (5 === 5)
= false

    > (4 === 5) && (5 === 6)
= false


    > true || true
= true

    > true || false
= true

    > false || true
= true

    > false || false
= false

    > (4 === 4) || (5 === 5)
= true

    > (4 === 4) || (5 === 6)
= true

    > (4 === 5) || (5 === 5)
= true

    > (4 === 5) || (5 === 6)
= false

    > isRed(item) && isPortable(item)
    > isGreen(item) || hasWheels(item)



let a = 5
if (a) {
    console.log("how can this be true?");
} else {
    console.log("it is not true");



} let b = 0
if (b) {
    console.log("how can this be true?");
} else {
    console.log("it is not true");
}


let x;

if (x = 5) {
    console.log("how can this be true?");
} else {
    console.log("it is not true");
}
