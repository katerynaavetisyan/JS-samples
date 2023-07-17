const words = ['dog', 'cupcake', 'bag', 'wag'];
words.some(word => {
    return word.length > 4;
})
words.some(word => word[0] === 'Z');
words.some(w => w.includes('cake'));
console.log(words);