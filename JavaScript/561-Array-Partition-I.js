/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort(function(a, b){
        return a - b;
    });
    for (var j = 0; j < nums.length; j+=2) {
        sum += nums[j];
    }
    return sum;
}

var a = [6214, -2290, 2833, -7908];
console.log(arrayPairSum(a));
