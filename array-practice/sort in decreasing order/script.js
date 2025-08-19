// Sort numbers in an array in decreasing order

let arr = [5, 2, 4, 10, -10, 0];

function sortArray(arr){
    let newArray = [];
    newArray.unshift(arr[0]);
    let i = 1;
    let j = 0;
    while (i < arr.length){
        if(arr[i] >= newArray[j]){
            newArray.splice(j, 0, arr[i]);
            i++;
            j = 0;
        } else if (arr[i] < newArray[j]) {
            j++;
        } else if (newArray[j] == undefined) {
            newArray.splice(j, 0, arr[i]);
            i++;
        }
    }
    return(newArray);
}

arr = sortArray(arr);
console.log(arr);