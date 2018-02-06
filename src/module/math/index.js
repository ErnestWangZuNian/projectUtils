let math = {
  /**
   *
   * 两个数相加
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  add: (arg1, arg2) => {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m, c;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
      var cm = Math.pow(10, c);
      if (r1 > r2) {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", "")) * cm;
      } else {
        arg1 = Number(arg1.toString().replace(".", "")) * cm;
        arg2 = Number(arg2.toString().replace(".", ""));
      }
    } else {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
  },
  /**
   *
   * 两个数想减
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  sub: (arg1, arg2) => {
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = r1 >= r2 ? r1 : r2;
    return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
  },
  /**
   *
   * 两个数相乘
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  mul: (arg1, arg2) => {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return (
      Number(s1.replace(".", "")) *
      Number(s2.replace(".", "")) /
      Math.pow(10, m)
    );
  },
  /**
   *
   * 两个数相除
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  div: (arg1, arg2) => {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var t1 = 0,
      t2 = 0,
      r1,
      r2;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return r1 / r2 * Math.pow(10, t2 - t1);
  },
  /**
   *
   * 累计计算
   * @param {any} arg1
   * 
   * @param {any} arg2
   * @returns
   */
  reduce: (args, fn) => {
    return args.reduce((arg1, arg2) => fn(arg1, arg2))
  },
  /**
   *
   * 累计相加
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  adds: (...args) => {
    return math.reduce(args, math.add);
  },
  /**
   *
   * 累计相减
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  subs: (...args) => {
    return math.reduce(args, math.sub);
  },
  /**
   *
   * 累计相乘
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  muls: (...args) => {
    return math.reduce(args, math.mul);
  },
  /**
   *
   * 累计相除
   * @param {any} arg1
   * @param {any} arg2
   * @returns
   */
  divs: (...args) => {
    return math.reduce(args, math.div);
  }
};
export default math;
