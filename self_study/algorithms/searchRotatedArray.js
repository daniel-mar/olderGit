/** Search in Rotated Sorted Array
 * 
 * Suppose an array sorted in ascending order is rotated at some pivot
 * unknown to you beforehand.
 * ie: [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]
 * 
 * How do you solve this problem in:
 * Time Complexity : O(log n)
 * 
 * You are given a target value to search, if found in the array
 * return: it's index value
 * otherwise return -1
 * 
 * You may assume no duplicates exist in the array
 */

/* Psuedo Code: Input [4,5,6,7,8,0,1,2]
* We could approach iterably, but the requirement here is O(log n)
* Where when n changes, the less the log(n) function changes.
* With that in mind: iterably won't be the approach.
* === I want to implement a binary search ===
* We can do this because the array is sorted.
* I want to establish left and right quadrants, seperated by a mid-point

* Target: 8
* We would start by wanting to check if the midpoint is a higher value
* than the last point. Assuming that there is a pivot area here but that
* pivot is also in ascending order.
* If the midpoint is 

* Default Left: Index[0] - Value: 4
* Default Right: Index[Input.length-1] - Value: 2
* Default Mid: Index Position that we find the value of by:
    So Index 3 would found with [Math.floor((left+right)/2)]
    Input[3] - Value: 7
* After these are established, we could check if midpoint is our target.
*   if so return that index position, otherwise we continue our logic.
* We would first focus on the right quadrant, because there may be a
* pivot point in that area and we would want to compare and traverse through
* with a while loop.
* Every iteration we would want a midpoint to be established.
* Then we would determine which segment is sorted.
* We would check the quadrants with an if statement:
*   Where the first statement would check if the first value is
    less than or equal to the mid value. IF TRUE: our target would be in this left quadrant. 
        Another IF to check if array[0] <= Target AND 
        Target <= nums[mid] : then our value must be here and we adjust
        the RIGHT with: mid - 1
            else: LEFT: mid + 1
    IF NOT TRUE (else): check the right quadrant with an if statement.
        IF: nums[mid] <= Target AND Target <= nums[right]:
            would mean our Target exists in the right quadrant
            We can adjust our right and ignore the left quadrant
            LEFT: mid + 1
        else it isn't in the right side: RIGHT = mid - 1;
    Further: we would check the left assuming it is sorted and
    at a point we do not know, it has a pivot, but that pivot will
    also be sorted.
        We first check the left quadrant
 */

const searchRotatedArray = (nums, target) => {
    // Storing the index positions to be traversing.
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right) {
        // Every iteration establishes a mid-point.
        // Because we will be updating the quadrants to focus on.
        let midPoint = Math.floor((left+right)/2);

        // Each iteration check if we found the target
        if(nums[midPoint] == target) return midPoint;

        // Check if our input[left] <= input[midPoint]
        // IF true, then the answer may be in the left quadrant.
        if(nums[left] <= nums[midPoint]) {
            // Our answer may be in the left quadrant
            if(nums[left] <= target && target <= nums[midPoint])
            right = midPoint - 1;
            // Else, it might be in the right quadrant
            else
            left = midPoint + 1;
        } else {
            // ELSE, our answer may be in the right quadrant. 
            // Our answer may be in the left quadrant
            if(nums[mid] <= target && target <= nums[right])
                left = midPoint + 1;
                // Else, it might be in the right quadrant
            else
                right = midPoint - 1;
        }
    }
    // After we checked each quadrant and have not successfully
    // found our target value in our array with binary search.
    return -1;
}

// === INPUT FOR TESTING ===

const input = [0, 1, 2, 4, 5, 6, 7]; // expected 0
const input2 = [3, 4, 5, 1, 2]; // expected 1
const input3 = [4, 5, 6, 7, 0, 1, 2]; // expected 0

const target = 6
const target2 = 3 // expected return -1 when paired with input 3
const target3 = 0


// === TESTING ===
console.time();
console.log(`Array is: ${input}, Target: ${target}, Found at index: ${searchRotatedArray(input, target)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input2}, Target: ${target2}, Found at index: ${searchRotatedArray(input2, target2)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input3}, Target: ${target3}, Found at index: ${searchRotatedArray(input3, target3)}`);
console.timeEnd();

console.log('===========================')