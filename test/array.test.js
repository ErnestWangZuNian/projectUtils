import array from "../src/module/array";
import chai from "chai";
let expect = chai.expect;

describe("数组去重的测试", function() {
  it("应该输出去重以后的数组", function() {
    expect(
      array.unique([
        1,
        "1",
        2,
        2,
        { name: "wzn" },
        { name: "wzn" }
      ])
    ).to.deep.equal([1, "1", 2, { name: "wzn" }]);
  });
});

describe("删除数组中某一项的测试", function() {
  it("应该输出删除对应值以后的数组", function() {
    expect(
      array.deleteItem([1, 2, { name: "wzn" }], 1)
    ).to.deep.equal([ 2, { name: "wzn" }]);
  });
});
