/** Find Minimum in Rotated Sorted Array
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * 
 * ie: [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]
 * 
 * find the minimum element, you may assume no duplicates exists.
 * ex: [3,4,5,1,2] output: 1
 * [4,5,6,7,0,1,2] output: 0
 */

    /** BRUTE FORCE === BUILT-IN
     * 
     * @param {*} nums 
     * @returns Time Complexity: O(n) - Linear - For loop from built in
     * Space Complexity: O(1) - Constant - Space for array does not change
     * Use the Math.min and spread our array as parameters 
     */
    // const findMin = (nums) => {
    //     return Math.min(...nums)
    // };


    // ==================================



    /** Binary Search
     * Establish 2 boundaries [Left and Right segments]
     * Remember that we assume that things are in ascending order.
     * We are searching for the minimum value!!
     * Time Complexity: n log n
     * 
     * @param {*} nums 
     * 
     * // Code explanation / understandings:
     * if(nums[midPoint] > nums[right]) {
            because it is ascending, if the mid point is greater
            than the last value of the array, we can adjust our
            left pointer, to be midPoint + 1. MEANING: That it is more
            probable that our solution is in the right segment. 
        }
        // ELSE: adjusts the right to current midpoint.
        // when the solution is closer to the left quadrant.
        else {
            right = midPoint; 
            }
        
     */
    // Starting Boundaries, start of array and end of array
    const findMin = (nums) => {
        let left = 0;
        let right = nums.length-1;

        while(left < right) {
            // midpoint would be the average
            let midPoint = Math.floor((left+right)/2)

            // if true, there may be a minimum value +1 to the midpoint.
            // within the right quadrant.
            if(nums[midPoint] > nums[right]) {
                left = midPoint + 1;
            } else {
                right = midPoint; // adjusts the right to current midpoint
                // when the solution is closer to the left quadrant.
            }
        }
        return nums[left]
    };



// === TESTING ===
const input2 = [3,4,5,1,2]; // expected 1
const input = [0,1,2,4,5,6,7]; // expected 0
const input3 = [4, 5, 6, 7, 0, 1, 2]; // expected 0
const input5 = [10, 8, 12, 6, 13, 11, 24, 36]; // expected 6
const input4 = [10, 8, 6, 9, 7, 0, 1, 2, 3]; // expected 0
const input6 = [10, 8, 9, 7, 11, 24, 36]; // expected 7

console.time();
console.log(`Array is: ${input2}, Min Value Found: ${findMin(input2)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input}, Min Value Found: ${findMin(input)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input3}, Min Value Found: ${findMin(input3)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input5}, Min Value Found: ${findMin(input5)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input4}, Min Value Found: ${findMin(input4)}`);
console.timeEnd();

console.log('===========================')

console.time();
console.log(`Array is: ${input6}, Min Value Found: ${findMin(input6)}`);
console.timeEnd();