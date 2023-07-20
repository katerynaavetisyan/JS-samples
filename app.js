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
if (password.length < 10) {
    console.log('Password is too short');
    if (password.indexOf(' ') >= 0) {
        console.log('password can not contain spaces');
    }
} else {
    console.log('Valid password');
}

//2. change your code to use AND oparator and only one if/else statement


// const password = prompt('Enter a password')
// if (password.length < 10 && password.indexOf(' ') >= 0) {
//     console.log('Invalid password');
// } else {
//     console.log('Valid password');
// }
