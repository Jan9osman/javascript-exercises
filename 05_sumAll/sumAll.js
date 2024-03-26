const sumAll = function(lowRange, highRange) {
    if(typeof lowRange != "number" || lowRange != parseInt(lowRange))
    {
        return "ERROR";
    }
    if(typeof highRange != "number" || highRange != parseInt(highRange))
    {
        return "ERROR";
    }
    if(highRange < lowRange)
    {
        let temp = highRange;
        highRange = lowRange;
        lowRange = temp;
    }
    if(lowRange < 0 || highRange < 0)
    {
        return "ERROR";
    }
    let numberCount = highRange - lowRange + 1;
    let finalSum = 0;
    for(let i = 0; i < numberCount; i++)
    {
        finalSum += i + lowRange;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

sumAll(1,4);
