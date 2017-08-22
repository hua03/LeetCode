/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var sum = 0
    nums.sort(function (a, b) {
        return a - b
    })
    for (var j = 0; j < nums.length; j += 2) {
        sum += nums[j]
    }
    return sum
};

module.exports = arrayPairSum;