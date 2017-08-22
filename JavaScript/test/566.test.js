var matrix = require('./../566-Reshape-the-Matrix')
var expect = require('chai').expect

describe('matrixReshape',function(){
    var nums = [[1,2],[2,3]]
    it('r*c不等于数组的数据长度，返回原数组', function(){
        expect(matrix.matrixReshape(nums, 1, 1)).to.be.equal(nums)
    })
    it('r*c不等于数组的数据长度，返回原数组', function(){
        expect(matrix.matrixReshape2(nums, 1, 1)).to.be.equal(nums)
    })
})