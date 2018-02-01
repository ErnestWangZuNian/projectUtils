import math from "../src/module/math";
import chai from "chai";
let expect = chai.expect;

describe("两个数相加测试", function() {
  it("应该输出两个相加以后的结果", function() {
    expect(math.add(0.1847, 0.206)).to.be.equal(0.3907);
  });
});

describe("两个数相减测试", function() {
  it("应该输出两个相减以后的结果", function() {
    expect(math.add(math.sub(0.48, 0.38),0.2)).to.be.equal(0.3);
  });
});

describe("两个数相乘测试", function() {
    it("应该输出两个相乘以后的结果", function() {
      expect(math.mul(0.34, 100000)).to.be.equal(34000);
    });
});

describe("两个数相除测试", function() {
    it("应该输出两个相除以后的结果", function() {
      expect(math.div(0.178, 10000)).to.be.equal(0.0000178);
    });
});

describe("多个数相加测试", function() {
    it("应该输出多个相加以后的结果", function() {
      expect(math.adds(0.2, 0.1,0.4,0.8,0.7)).to.be.equal(2.2);
    });
});

describe("多个数相减测试", function() {
  it("应该输出多个相减以后的结果", function() {
    expect(math.subs(1,0.2,0.1,0.1)).to.be.equal(0.6);
  });
});

describe("多个数相乘测试", function() {
  it("应该输出多个相乘以后的结果", function() {
    expect(math.muls(1,0.2,0.1,0.1)).to.be.equal(0.002);
  });
});

describe("多个数相除测试", function() {
  it("应该输出多个相除以后的结果", function() {
    expect(math.divs(0.8,0.4,10000)).to.be.equal(0.0002);
  });
});




