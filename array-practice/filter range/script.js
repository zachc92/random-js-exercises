// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a
// and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

let arr = [3, 5, 10, 12, 17, 22];

function filterRange(arr, a, b){
    let newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= a && arr[i] <= b){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let filtered = filterRange(arr, 4, 18);

console.log(filtered);
console.log(arr);