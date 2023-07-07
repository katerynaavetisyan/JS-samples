


function sumArray(arrOfNum) {
    let sumOfNum = 0;
    for (let i = 0; i < arrOfNum.length; i++) {
        sumOfNum += arrOfNum[i];
    }
    return sumOfNum;
}
console.log(sumArray([1, 2, 3, 4]));
