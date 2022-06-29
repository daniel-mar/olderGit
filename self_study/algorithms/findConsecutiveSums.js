const findConsecutiveSums = (nums, targetSum) => {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let tempArr = [];
        let tempSum = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > targetSum) break;
            tempSum += nums[j];
            tempArr.push(nums[j]);
            if (tempSum === targetSum) output.push([...tempArr]);
            else if (tempSum > targetSum) break;
        }
    }
    return output;
}

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
console.log(findConsecutiveSums(nums1, sum1));
// const expected1 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
// ];

const nums2 = [];
const sum2 = 5;
console.log(findConsecutiveSums(nums2, sum2));
// const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
console.log(findConsecutiveSums(nums3, sum3));
// const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
console.log(findConsecutiveSums(nums4, sum4));