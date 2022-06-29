/* 
* like bubbleSort but better ======================
* -- the first loop: searches for the lowest value,  
* when finished, swaps the lowest value for the value at 0 index.
* -- on second loop, searching for the second lowest value, then swaps with value @ index 1.
* continue this pattern until the whole array is sorted.
*/


const selectionSort = (arr) => {

    for (var start = 0; start < arr.length - 1; start++) {
        var mindex = start;
        for (var i = start + 1; i < arr.length; i++) {
            if (arr[i] < arr[mindex]) {
                mindex = i;
            }
        }
        console.log(`swapping ${arr[start]} with ${arr[mindex]}`);
        var temp = arr[start];
        arr[start] = arr[mindex];
        arr[mindex] = temp;
        // console.log(arr[mindex]);
    }
    return arr;
}

console.log([5, 4, 2, 6, 8, 14, 1, 3]);
console.log(selectionSort([5, 4, 2, 6, 8, 14, 1, 3]));
console.log([4, 8, 5, 2, 1, 0, 9, 7]);
console.log(selectionSort([4, 8, 5, 2, 1, 0, 9, 7]))