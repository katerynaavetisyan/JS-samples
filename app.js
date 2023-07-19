const person = {
    firsName: 'Kate',
    lastName: 'Ave',
    fullName: function () {
        return `${this.firsName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName());
        }, 3000)
    }
}
console.log(person.fullName());