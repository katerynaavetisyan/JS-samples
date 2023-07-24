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
console.log(deathYear);