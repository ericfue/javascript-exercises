const reverseString = function(string) {
    reversed = ""
    len = string.length;
    for (let i = (len - 1); i > -1; i--) {
        letter = string.charAt(i);
        reversed += letter;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
