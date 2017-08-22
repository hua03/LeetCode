/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    /* var reduce = []
    for(var i = 0; i < nums.length; i++){
        reduce = reduce.concat(nums[i])
    } */
    var reduce = Array.prototype.concat.apply([],nums);
    // console.log(reduce)
    
    if(reduce.length === (r*c)){
        var result = []
        for(var j = 0; j < reduce.length; j += c){
            result[j/c] = reduce.slice(j, j+c)
        }
        return result
    }else{
        return nums
    }
}

var matrixReshape2 = function(nums, r, c) {
    /* var reduce = []
    for(var i = 0; i < nums.length; i++){
        reduce = reduce.concat(nums[i])
    } */
    var reduce = Array.prototype.concat.apply([],nums);
    // console.log(reduce)
    
    if(reduce.length === (r*c)){
        var result = []
        for(var j = 0; j < reduce.length; j += c){
            result[j/c] = reduce.slice(j, j+c)
        }
        return result
    }else{
        return nums
    }
}

exports.matrixReshape = matrixReshape;
exports.matrixReshape2 = matrixReshape2;

