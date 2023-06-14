const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
}


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
const person2 = {
    firstName: 'Max',
    lastName: 'Johnson',
    age: 18,
}

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

function updateFirstName(personObject, newFirstName) {
    personObject.firstName = newFirstName;
    return personObject;
}
console.log(updateFirstName(person2, 'Kate'))


//create a function `updateLastName` that accepts two params:
//person object like person1
//new newLastName - string
//function updates/changes old lastName to newName 
//and returns updated object


function updateLastName(personObj, newLastName) {
    personObj.lastName = newLastName;
    return personObj;
}
console.log(updateLastName(person2, 'White'))