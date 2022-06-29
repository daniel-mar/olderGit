//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array

// const combine = (leftArr, rightArr) => {

//     temp = []
//     let i = 0;
//     let j = 0;
//     let counter = 0;
//     let size = leftArr.length + rightArr.length;
//     console.log(size)

//     while (temp.length < size) {
//         if (leftArr[i] < rightArr[j]) {
//             temp.push(leftArr[i]);
//             console.log(`pushed: ${leftArr[i]}`)
//             i++;
//             counter++;
//         }
//         if (leftArr[i] > rightArr[j]) {
//                 temp.push(rightArr[j])
//                 console.log('else')
//                 j++;
//         }

//         console.log(`the counts: ${i}, and ${j}`)
//         console.log(`${temp}`)
//     }
//     return temp
// }


const combine = (leftArr, rightArr) => {
    let newArr = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] < rightArr[0]) {
            newArr.push(leftArr.shift());
        }
        else if (rightArr[0] < leftArr[0]) {
            newArr.push(rightArr.shift());
        }
        console.log(newArr);
    }
    while (leftArr.length === 0 && rightArr.length > 0) {
        newArr.push(rightArr.shift())
    }
    while (rightArr.length === 0 && leftArr.length > 0) {
        newArr.push(leftArr.shift())
    }
    return newArr;
}

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1, 2, 7, 9], [0, 3, 4, 6, 11]));

// should return [0,1]
console.log(combine([1], [0]));