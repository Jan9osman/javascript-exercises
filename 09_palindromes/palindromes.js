const palindromes = function (str) {

    var punctuation = /[\.,?! / +/g,' ']/g; 
    var noPunctuation = str.replace(punctuation, ""); //remove punctuation and spaces
    let lowRegStr = noPunctuation.toLowerCase();

    let reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr; // "amanap
};

// Do not edit below this line
module.exports = palindromes;
