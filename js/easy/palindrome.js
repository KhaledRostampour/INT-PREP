// Write a JavaScript program to check whether the given string is a palindrome. (that reads the same from forward and backward)

function palindrome(string) {
    let reversed = string.split('').reverse().join('');
    return reversed === string;
}

const str = "mam";
console.log(palindrome(str));