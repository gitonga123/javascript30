// Given an integral number, determine if it's a square number:
var isSquare = function (n) {
    let results = false;
    if (n < 0) {
        return false;
    } else if (n === 0) {
        return true;
    } else {
        results = Math.sqrt(n);
        return Number.isInteger(results);
    }
}

console.log(isSquare(3));