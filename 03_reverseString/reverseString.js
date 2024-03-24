const reverseString = function(stringToReverse) {
    let splitString = stringToReverse.split("");
    let reverseSplitArray = splitString.reverse();
    let reversedString = reverseSplitArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
