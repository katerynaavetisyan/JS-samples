function parent() {
    const num1 = 3;
    console.log("parentFunc")

    function child() {
        const num2 = 2;
        console.log("childFunc")
        console.log(num1)
    }

    console.log(num2);
    child();
}
parent();



