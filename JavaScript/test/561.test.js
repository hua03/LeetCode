var arrayPairSum = require('./../561-Array-Partition-I')
var expect = require('chai').expect

describe('arrayPairSum',function(){
    var nums = [1,4,3,2]
    var nums2 = [-1,-4,3,2]
    it('返回最大的最小值之和',function() {
        expect(arrayPairSum(nums)).to.be.equal(4)
    })
    it('负数也能正常输出',function() {
        expect(arrayPairSum(nums2)).to.be.equal(-2)
    })
})