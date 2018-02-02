import other from "../src/module/other";
import chai from "chai";
let expect = chai.expect;

describe("输出金额格式化以后的数据", function() {
    it("应该输出金额格式化以后的数据", function() {
      expect(
        other.formatMoney(19000)
      ).to.be.equal('19,000.00');
    });
  });

  describe("输出脱敏以后的手机号码", function() {
    it("应该输出脱敏以后的手机号码", function() {
      expect(
        other.formatPhone('13368343974')
      ).to.be.equal('133****3974');
    });
  });