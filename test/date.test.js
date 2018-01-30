import date from "../src/module/date";
import chai from "chai";
let expect = chai.expect;
describe("时间格式化测试", function() {
    it("应该输出格式化以后的数组", function() {
      expect(
        date.format("yyyy/MM/dd","2017-01-30 02:59:25.382")
      ).to.be.equal("2017/01/30");
    });
  });
  
  describe("时间年月日测试", function() {
    it("应该只输出对应的年月日", function() {
      expect(
        date.nyr("2017-01-30 02:59:25.382")
      ).to.be.equal("2017-01-30");
    });
  });

  describe("时间时分秒测试", function() {
    it("应该只输出对应的时分秒", function() {
      expect(
        date.sfm("2017-01-30 02:59:25.382")
      ).to.be.equal("02:59:25");
    });
  });