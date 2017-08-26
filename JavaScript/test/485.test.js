var maxConsecutiveOnes = require('./../485-Max-Consecutive-Ones')
var expect = require('chai').expect

describe('maxConsecutiveOnes',function(){
    var nums = [1,1,0,1,1,1]
    it('输出相连的1的最大数', function() {
        expect(maxConsecutiveOnes(nums)).to.be.equal(3)
    })
})