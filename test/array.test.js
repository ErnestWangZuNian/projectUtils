import array from "../src/module/array";
import chai from "chai";
let expect = chai.expect;

describe("数组去重的测试", function() {
  it("应该输出去重以后的数组", function() {
    expect(
      array.unique([1, "1", 2, 2, { name: "wzn" }, { name: "wzn" }])
    ).to.deep.equal([1, "1", 2, { name: "wzn" }]);
  });
});

describe("寻找数组中某个值", function() {
  it("应该输出对应值在数组中的索引", function() {
    expect(array.findValueInArray([1, 2, 1], 1)).to.deep.equal([0, 2]);
  });
});

describe("删除数组中某一项的测试", function() {
  it("应该输出删除对应值以后的数组", function() {
    expect(array.deleteValue([1, 2,1,1,1,1,{name: 'wzn'}], 1)).to.deep.equal([2,{name: 'wzn'}]);
  });
});
