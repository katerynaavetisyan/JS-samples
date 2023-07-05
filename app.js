const subreddits = ['books', 'cringe', 'chickens', 'funny']
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}


for (let sub of subreddits) {
    console.log('for...of')
    console.log(`Visit reddit.com/r/${sub}`);
}


const seatingChart = [
    ['Tom', 'Anthony', 'Maria'],
    ['Jack', 'Tony', 'Betsy'],
    ['Sonya', 'Bob']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student)
    }
}

for (let char of 'Hello world') {
    console.log(char);
}