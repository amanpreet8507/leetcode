/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 */

var findDisappearedNumbers = function (nums) {
  let obj = {};
  for (const n of nums) {
    obj[n] = 1;
  }
  //console.log(obj)
  let missing = [];
  for (let i = 1; i <= nums.length; i++) {
    //console.log(i)
    if (!obj[i]) {
      missing.push(i);
    }
  }
  return missing;
};

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
const nums2 = [1, 1];

console.log(findDisappearedNumbers(nums1));
console.log(findDisappearedNumbers(nums2));
