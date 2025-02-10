// Write a JavaScript program that calculates the factorial of a number

function factorialOfNum(n){
    let result = 1;
    // 0! = 1
    while(n > 1){
        result *=n;
        --n
    }
    // return n * factorial(n - 1); //recursive
    return result;
}

const num = 6;
console.log(factorialOfNum(num));