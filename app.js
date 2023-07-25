const user = {
    email: 'harvey@gmail.com',
    password: 'dsfhbstnbdfb4758',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    // died: 1978,
    city: 'San Francisco',
    state: 'California'
}
const { email, firstName, lastName, city, state } = user;

console.log(email);
console.log(lastName);
console.log(city);


const { born: birthYear, died: deathYear = 'N/A' } = user;
console.log(birthYear);

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// console.log(fullName(user));


// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }
console.log(fullName(user));

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}