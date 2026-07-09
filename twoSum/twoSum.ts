/**
 * Given an array of integers nums and an integer target,
 * Return indices of the two numbers such that they add up to target.

 * Constraints :
 *  2 <= nums.length <= 10^4
 *  -10^9 <= nums[i] <= 10^9
 *  -10^9 <= target <= 10^9
 *  Only one valid answer exists.

 * @param nums {number[]} 
 * @param target {number}
 * @returns {number[]} 
 */

// Time complexity - O(n)
// Space complexity - O(n)
// Solved using Hash Map for unsorted array

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    const checkMap = new Map<number, number>();
    nums.forEach((num, index) => {
        const diff = target - num;

        if (checkMap.has(diff)) {
            result.push(...[checkMap.get(diff) as number, index]);
        }
        checkMap.set(num, index);
    });
    return result
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([10, 2, -1, 9, 50, -20], -21));


// Time Complexity - O(n)
// Space Complexity - O(1)
// Solved using Two pointers for sorted array

function twoSumSorted(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const addedValue = nums[left] + nums[right];
        if (addedValue === target) {
            return [left, right];
        }
        else if (addedValue > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return [];
}
console.log("Sorted output ", twoSumSorted([2, 3, 4], 7));
console.log("Sorted output ", twoSumSorted([2, 7, 11, 15], 9));
console.log("Sorted output ", twoSumSorted([3, 3], 6));
console.log("Sorted output ", twoSumSorted([-20, -1, 2, 6, 10], -10));