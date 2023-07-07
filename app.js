




function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}


// A bit more explicit solution:
function capitalize(word) {
    const firstLetterCapitalized = word[0].toUpperCase();
    const restOfTheString = word.slice(1);
    return firstLetterCapitalized + restOfTheString;
}
