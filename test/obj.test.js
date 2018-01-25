import obj from "../src/module/object";
import chai from "chai";
let expect = chai.expect;
describe("判断两个对象的值是否相等", function() {
    it("应该输出true", function() {
      expect(
        obj.equalValue([[1,{name:'wzn'}],2,3,4],[[1,{name:'wzn'}],2,3,4])
      ).to.be.ok;
    });
  });