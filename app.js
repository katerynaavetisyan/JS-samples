function capitalize(str) {
    const firstLetter = str[0].toUpperCase();
    const restOfStr = str.slice(1)
    const result = firstLetter + restOfStr
    return result;
}


console.log(capitalize('test'));
