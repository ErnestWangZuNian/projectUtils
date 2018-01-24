import array from '../src/module/array';
import chai from 'chai';
let expect = chai.expect;


describe('数组去重的测试', function() {
  it('应该输出去重以后的数组', function() {
    expect(array.unique([1,'1',2,2,{name:'wangzuanina'},{name:'wangzuanina'}])).to.deep.equal([1,'1',2,{name:'wangzuanina'}]);
  })
});
