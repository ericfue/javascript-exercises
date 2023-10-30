const removeFromArray = function(array, ...toRemove) {
    const myArray = Array.from(array);
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (myArray[i] === toRemove[j]) {
                myArray.splice(i, 1);
                i--;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
