/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var MAX_VALUE = 10000;
    var sum = 0;

    if(nums.length%2 !== 0){
        return "the array is not an array of 2n integers";
    }
    for (var i = 0; i < nums.length; i++) {
        if (typeof nums[i] != 'number') {
            return "this is not an array of integer:"+i;
        }else if(Math.abs(nums[i]) > MAX_VALUE){
            return "the value of item is out of boundary value";
        }
    }

    nums.sort(function(a, b){
        return a - b;
    });
    console.log(a);
    for (var j = 0; j < nums.length; j+=2) {
        console.log(nums[j]);
        sum += nums[j];
    }
    return sum;
}



var a = [6214, -2290, 2833, -7908];
console.log(arrayPairSum(a));
