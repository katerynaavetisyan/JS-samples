//create conditional logic to validate the password.
//password can't be shorter than 10
//if the password is shorter than 10 log 'Password is too short'
//Password can't contain empty space. if it does log 'password can't contain spaces'
//if password is valid log: Valid password

// const password = prompt('Enter a password')
// if (password.length < 10) {
//     console.log('Password is too short');
// } else if (password.indexOf(' ') >= 0) {
//     console.log('password can not contain spaces');
// } else {
//     console.log('Valid password');
// }


//1. change your code to use nested condition


const password = prompt('Enter a password')
if (password.indexOf(' ') >= 0) {
    console.log('password can not contain spaces');
} else {
    if (password.length < 10) {
        console.log('Password is too short');
    } else {
        console.log('Valid password');
    }
}




// //2. change your code to use AND oparator and only one if/else statement


// const password = prompt('Enter a password')
// if (password.length > 10 && password.indexOf(' ') === -1) {
//     console.log('Invalid password');
// } else {
//     console.log('Valid password');
// }



/**
 * 1. create a function that accepts an array
 * and logs every element of the array using FOR LOOP
 *
 *
 * 2. do same task but replace FOR LOOP with
 * one for array methods(think what method is best)
 *
 * 3.Write a function 'fill' that creates a new array with given values
 *  example: const result = fill(5, 'Kate')
 * console.log(result)
 * ['Kate', 'Kate', 'Kate', 'Kate', 'Kate']
 */


// //1 
// function printElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }

// }
// console.log(printElements(['car', 'house', 'business']));

// //2
// function printElements(arr) {
//     arr.forEach(el => console.log(el))
// }
// console.log(printElements(['car', 'house', 'business']))

// //3
// function fill(times, word) {
//     //create new empty array
//     let result = [];
//     //create for loop that adds `word` `times` number of times
//     for (let i = 0; i < times; i++) {
//         result.push(word)
//     }
//     //return updated new array
//     return result
// }

// const newArr = fill(5, '  Kate')
// console.log(newArr)

// function fill(times, word) {
//     const result = [];
//     result.splice(fill)
//     return times += word

// } console.log(fill(5, 'Artur'));

// const result = fill(5, 'Kate')
// console.log(result)