// 2. Write a JavaScript program to reverse the given string

function reverseString(string){
    console.log(string.split(''));
    return string.split("").reverse().join('');
}

function reverseStrinWithForLoop(str){
    let reversed = "";
    for (let i = str.length -1 ; i >=0; i-- ){
        reversed +=str[i];
    }
    return reversed
}

console.log(reverseStrinWithForLoop("Khaled Rostampour"));
console.log(reverseString("John Doe"));