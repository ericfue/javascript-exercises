const sumAll = function(x, y) {
    let sum = 0;
    if (x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    } else if ((x - y) < 0) {
        while (x <= y) {
            sum += x;
            x++;
        }
    } else {
        while (x >= y) {
            sum += x;
            x--;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
