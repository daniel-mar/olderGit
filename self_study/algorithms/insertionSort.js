/* Looping through the array from 0 to arr.length,
* shift a value in the array back to the place it belongs
* the value to shift increment with each loop iteration
* follow the example for each step, with the current value in ()
* Step 1: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
* step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
* step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
* step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
* Step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...

*/


// CRACKED VERSION -- HIGH LEVEL
const insertionSort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        let j = i
        while (arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            j--
        }
    }
    return arr
}

// move them backwards, works
const insert = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i - 1]) {
            var temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
            i--;
        }
    }
    return arr
}

// Takes the values, move them forward, works!
const insertSo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            for (let j = 0; j <= i; j++) {
                if (arr[j] > arr[i + 1]) {
                    var temp = arr[i+1];
                    arr[i+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}



let testArr = [4, 7, 1, 2, 5, 0, 9, 6];
console.log(testArr);
console.log('insertion Sorting --');
console.log(insert(testArr));


//i = 1->2->1->0->1->2->3->2->1->2->3->4->3->4->5->4->3->2->1->0->1->2->3->4->5->6->7->6->5->6->7->8

//i = 1->2->3
//j = 1->2->1->0->3
