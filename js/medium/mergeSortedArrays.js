// 6. Make a function without any built-in sort functions that use two sorted arrays and merge them into one array

function mergeSortedArrays(arr1, arr2){
    let merged = [];
    let i =0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i])
            i ++
        } else {
            merged.push(arr2[j]);
            j++
        }
    }

    // append remaining elements form arr1
    while(i < arr1.length){
        merged.push(arr1[i])
            i++
    }

    while (j < arr2.length){
        merged.push(arr2[j]);
        j++
    }

    return merged;
}


const arr1 = [2, 3 , 5 , 8];
const arr2 = [4, 5 , 9 , 10];

console.log(mergeSortedArrays(arr1, arr2));
