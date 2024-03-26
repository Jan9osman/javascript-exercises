const removeFromArray = function(inputArray, ...elementsToRemove) {
    let finalArray = [];
    for(let i = 0; i < elementsToRemove.length; i++)
    {
        let lengthOfArray = inputArray.length;
        for(let arrayIndex = 0; arrayIndex < lengthOfArray; arrayIndex++)
        {
            if(inputArray[arrayIndex] === elementsToRemove[i])
            {
                inputArray.splice(arrayIndex, 1);
                arrayIndex = 0;
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1,2,2,3], 2)


