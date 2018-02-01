import regular from "../src/module/regular";
import chai from "chai";
let expect = chai.expect;

describe("邮箱地址的测试", function() {
    it("应该输出正则是否通过", function() {
      expect(
        regular.email.test('wangzunian@gmail.com')
      ).to.be.ok;
    });
  });

  describe("手机正则的测试", function() {
    it("应该输出正则是否通过", function() {
      expect(
        regular.phone.test(15368343973)
      ).to.be.ok;
    });
  });

  describe("账号正则的测试", function() {
    it("应该输出正则是否通过", function() {
      expect(
        regular.account.test('wa_dd')
      ).to.be.ok;
    });
  });

  
  describe("密码正则的测试", function() {
    it("应该输出正则是否通过", function() {
      expect(
        regular.password.test('wzl_---199542')
      ).to.be.ok;
    });
  });

  describe("身份证正则的测试", function() {
    it("应该输出正则是否通过", function() {
      expect(
        regular.idCard.test('500237188404021')
      ).to.be.ok;
    });
  });
  describe("银行卡正则的测试", function() {
    it("应该输出正则是否通过", function() {
      expect(
        regular.bankCard.test(1234567891111111)
      ).to.be.ok;
    });
  });




