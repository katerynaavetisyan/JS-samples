const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEEEEOOOOWWWW`);
    }
}
const meow2 = cat.meow;
console.log(cat.meow());
console.log(meow2());