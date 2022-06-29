/*  Psuedo
* partition the array around the value at arr[0]
* without creating a new array
* values LEFT of the original pivot should be less than the pivot
* values RIGHT of the pivot should be >= the pivot value
* NOTE: each side of the partitioned value does not have to be sorted.
* return the partitioned array

* bonus: return the index where the value at 0 ends  up

*/

const partition = (arr) => {
    pivot = arr[0];
    let pIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            let mover = i;
            while (mover > pIdx) {
                const temp = arr[mover - 1];
                arr[mover - 1] = arr[mover];
                arr[mover] = temp;
                mover--;
            }
            pIdx++;
        }
    }
    console.log(arr);
    return pIdx;
}

// expected return [4,2,3,5,9,5]
let arr = [5, 4, 9, 2, 5, 3];
let arrTwo = [7, 4];
let arrThree = [3, 5, 1, 2, 4];
let arrFour = [7, 2, 10, 15, 1];
console.log(partition(arr));
console.log(partition(arrTwo));
console.log(partition(arrThree));
console.log(partition(arrFour));
