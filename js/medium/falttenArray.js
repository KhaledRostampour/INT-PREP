// Develop a single-level array by functioning it into a flat nested array

function falltenArray(array){
    let result = [];
    function helper(arr){

        for (let item of arr){
            if(typeof item === 'number'){
                result.push(item)
            } 
            else if(Array.isArray(item)){
                helper(item)
            }
        }
    }
    helper(array);
    return result;
}

const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
console.log(falltenArray(nestedArray));