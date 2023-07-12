const person = {
    first: 'Kate',
    last: 'Ave',
    fullName() {
        return `${this.first} ${this.last}`
    }
}
console.log(person.fullName());
console.log(person.first = 'Artur');
console.log(person.fullName());