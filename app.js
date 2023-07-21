const nums = [2, 5, 63, 596, 12, 3, 4, 485]
console.log(Math.max(...nums));


const cats = ['Blake', 'Diana']
const dogs = ['Rodik', 'Rex', 'King']
console.log([...dogs, ...cats]);
const allPets = [...cats, ...dogs, 'Speedy']
console.log(allPets);