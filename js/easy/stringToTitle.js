// Write a JavaScript program to change the string to title (first letter of every word should be in upper case)

function stringToTitle(string){
    let result;
    let arrayOfString = string.split(' ');
    let upp = arrayOfString.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    })
    result = upp.join(' ');
    return result;
}

console.log(stringToTitle("hello world"));