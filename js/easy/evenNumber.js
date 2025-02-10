// 6. Write a JavaScript function that uses an array of numbers and only gives a new array with even numbers

function evenNumberInArray(array){
    let result= [];
    for (i=0; i< array.length; i++){
        if (array[i] % 2 === 0){
            result.push(array[i]);
        }
    }
    return result;
}

const array = [1,2,3,4,5,6,7];
console.log(evenNumberInArray(array));