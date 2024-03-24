const repeatString = function(str, number) {
    let repeatedString = "";
    if(number < 0)
    {
        repeatedString = "ERROR";
        return repeatedString;
    }
    for(let i = 0; i < number; i++)
    {
        repeatedString += str;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
