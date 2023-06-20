// false || (true && false); false
// true || (1 + 2); true
//     (1 + 2) || true; 3
// true && (1 + 2); 3
// false && (1 + 2); false
//     (1 + 2) && true; true
//         (32 * 4) >= 129; false
// false !== !true; false
// true === 4; false
// false === (847 === '847'); false
// false === (847 == '847'); false
//     (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; true


//create a function converToBoolean that accepts
//one parameter and returns its boolean value.
//example converToBoolean(5) => true
// converToBoolean(0) ==> false

function converToBoolean(param) {
    return !!param;
}

let value = 3;
// if (value) {
//     console.log('running code with value', value);
// } else {
//     console.log('I do not want to run any code');
// }

window.console.log(2);
