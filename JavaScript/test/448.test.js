var findDisappearedNumbers = require('./../448-Find-All-Numbers-Disappeared-in-an-Array')
var expect = require('chai').expect

describe('Find All Numbers Disappeared in an Array',function(){
    var arr1 = [4,3,2,7,8,2,3,1]
    var arr2 = [5,4,6,7,9,3,10,9,5,6]
    var rt1 = [5,6]
    var rt2 = [1,2,8]
    
    it('返回未出现的值',function(){
        expect(findDisappearedNumbers(arr1)).to.deep.equal(rt1)
    })
    it('返回未出现的值',function(){
        expect(findDisappearedNumbers(arr2)).to.deep.equal(rt2)
    })
})