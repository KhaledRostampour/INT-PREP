// 3. Write a JavaScript function that finds the maximum number in an array

function findMaxNum(array) {
    if(array.length === 0){
        return null
    }
    let maxNum = array[0];
    for (let i=1; i<array.length; i++){
        if(array[i] > maxNum){
            maxNum = array[i];
        }
    }
    return maxNum;
}

const array = [1, 0, 5, 8, 7];
console.log("Max Number is: ", findMaxNum(array));