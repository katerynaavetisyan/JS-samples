// let str = 'LoL';
// for (let i = 0; i <= 4; i++) {
//     console.log('Outer:', i);
//     for (let j = 0; j < str.length; j++) {
//         console.log("    Inner:", str[j]);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 0; j < 4; j++) {
//         console.log(`       j is: ${j}`)
//     }
// }

const seatingChart = [
    ['Anna', 'Maria', 'John'],
    ['Artur', 'Alisa', 'Avetis'],
    ['Katya', 'Yura', 'Maria', 'Volodya']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row # ${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}