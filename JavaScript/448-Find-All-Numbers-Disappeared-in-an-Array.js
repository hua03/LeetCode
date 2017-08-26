/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = []
    nums.unshift(-1)
    nums.push(-1)
    var str = nums.toString()
    // console.log(str)

    for(var i = 1; i < nums.length-1; i++){
        // str.match(/\,i\,/)
        if(str.indexOf(','+i+',') === -1){
            result.push(i)
        }
    }
    // console.log(result)
    return result
}

findDisappearedNumbers([3,11,8,16,4,15,4,17,14,14,6,6,2,8,3,12,15,20,20,5])



module.exports = findDisappearedNumbers 