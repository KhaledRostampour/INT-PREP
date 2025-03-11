
// 5. Write a JavaScript function that uses an array of objects and keys and shows a new array based on the values of the key in ascending order

function ascendingArrayOfObject(arr, key){
    return arr.sort((a, b) => {
        if (a[key] < b[key]){
            return -1
        } else if (a[key] > n[key]){
            return 1
        } else {
            return 0
        }
    })


    
}



const arrayofObject = [{name: 'Alice', age: 25}, {name: 'Bob', age: 20}, {name: 'Charlie', age: 15}] 
console.log(ascendingArrayOfObject(arrayofObject, 'age')) // expected result: [{age: 15}, {age: 20}, {age: 25}]