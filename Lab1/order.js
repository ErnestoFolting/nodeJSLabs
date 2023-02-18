// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

function order(str) {
    words = str.split(' ');
    words.sort(function compare(a, b) {
        if(getNumber(a) < getNumber(b))return -1;
    });
    return words.join(' ');
}

function getNumber(str) {
    for (let i = 0; i < str.length; i++) {
        charCode = str[i].charCodeAt();
        if (charCode >= 49 && charCode <= 57) return Number(str[i]);
    }
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));