function greet(msg = "Hey there", person) {
    console.log(`${msg}, ${person}!`);
}
console.log(greet('Hello', 'Katia'));

function greet2(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}
console.log(greet2("Artur", "Helioo", "!!!!!!!????"));

