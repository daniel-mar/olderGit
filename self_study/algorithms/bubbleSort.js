
function bubbleSort(arr) {
    // move from left to right in the array starting at index 0
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j; i++) {
            // compar the value at the current index wit the value at the next- if value is greater than the next
            if (arr[i] > arr[i + 1]) {
                //if out of order,Swap value at the current index with the value of the next
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 23, 0, 12, 8, 6])); //[0,5,6,8,12,23]

function buble(arr) {
    var isSorted = false;

    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                console.log(`swapping ${arr[i]} because it's bigger than ${arr[i + 1]}`);
                var temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                isSorted = false;
            }
        }
    }
    return arr;
}

let arr = [5, 23, 0, 12, 8, 6];
console.log(`array = ${arr}`);
console.log('================ running buble =================');
console.log(`bubble sorted: ${buble(arr)}`);