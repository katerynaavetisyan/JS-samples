const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}
console.log(myMath.square(4));
console.log(myMath.cube(4));

const math = {
    greet: 'Hi!',
    add(x, y) {
        return x + y;
    }
}
console.log(math.add(5, 540));
console.log(math.greet);