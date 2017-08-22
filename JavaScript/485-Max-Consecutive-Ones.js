/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var str = nums.join('')
    var newArr = str.split('0')
    var max = newArr[0].length
    for(var i = 0; i < newArr.length; i++){
        var len = newArr[i].length
        if(max < len){
            max = len
        }
    }
    return max
};

module.exports = findMaxConsecutiveOnes


var arr = [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,,1,0,1,1,1,1,1,1,1,0,1,1,1]

console.time('findMaxConsecutiveOnes')
console.log(findMaxConsecutiveOnes(arr))
console.timeEnd('findMaxConsecutiveOnes')