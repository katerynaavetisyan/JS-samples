let greet = function () {
    console.log('Hi!')
}
greet()

function callTwice(func) {
    func();
    func()
}

function laugh() {
    console.log('Hahahahahahah');
}
callTwice(laugh)