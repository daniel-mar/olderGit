/** Top K Frequent Elements
 * Given: an integer array nums and an integer k, 
 * return: the k most frequent elements. 
 * You may return the answer in any order.
 * arr nums, int k
 * where k is the minimum frequency we are looking!
 * We can assume that the array is sorted in ascended?
 */

// Heapify function = O(n) but each pop is log(n) * k
// making it k * log(n) and better than n log n if k is less than n  
// or
// Bucket Sort = O(n) - linear time
const frequentElem = (nums, k) => {
    // look up table | {element: # seen}
    // {1:3, 2:2, 3:1}
    const seen = {};
    // iterate through nums array
    for(let num of nums) {
        if(seen[num] === undefined) {
            seen[num] = 1;
        } else {
            seen[num]++;
        }
    }
    
    const bucket = [];

    // for every element in nums, push into bucket
    for(let i=0; i<=nums.length; i++) {
        bucket.push([]);
    }
    for(let key in seen) {
        let count = seen[key];
        bucket[count].push1(key);
    }

    let res = [];
    
    for(let i = bucket.length-1; i>=0; i--) {
        if(bucket[i].length ===0) {
            continue;
        } else {
            res = [...res, ... bucket[i]]
        }
    }



}



const nums = [1, 1, 1, 2, 2, 3]; // output: [1,2]
const frequency = 2;
console.log(frequentElem(nums, frequency));

const nums2 = [1]; // output: [1]
const frequency2 = 1;

// in our given example
    // [[], [3], [2], [1]]

    // if nums = [1,2,3,4,5] would have the bucket look like
    // bucket = [[], [1,2,3,4,5]]

    // if nums = [1,1,1,1,1] would have a bucket like
    // bucket = [[],[],[],[],[],[1]]