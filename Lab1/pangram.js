// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(inputStr){
    strCharCodes = inputStr.split("").map(char => char.toLowerCase().charCodeAt(0));
    filteredCodes = strCharCodes.filter(code => code >= 97 && code <=122);
    const uniqueCodes = Array.from(new Set(filteredCodes));
    uniqueCodesLength = uniqueCodes.length;
    console.log(uniqueCodesLength)
    if(uniqueCodesLength == 26) return true;
    return false;
}


console.log(isPangram('The quick brown fox jumps over the lazy dog'));