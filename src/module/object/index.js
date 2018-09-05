let obj = {
  /**
   *
   * 判断两个对象(包含数组)的值是否相等，返回布尔值
   * @param {any} a
   * @param {any} b
   * @returns
   */
  equalValue: (a, b) => {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    let result = true;
    if (aProps.length !== bProps.length) {
      result = false;
    } else {
      aProps.map(item => {
        if (typeof a[item] === "object") {
          result = obj.equalValue(a[item], b[item]);
        } else {
          if (a[item] !== b[item]) {
            result = false;
          }
        }
      });
    }

    return result;
  },
  //  对象比较函数
  comprison(propertyName) {
    return (object1, object2) => {
      var value1 = object1[propertyName] || 0;
      var value2 = object2[propertyName] || 0;
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    };
  },
  // 对象克隆
  deepClone(parent, child) {
    let i, proxy;

    proxy = JSON.stringify(parent);
    proxy = JSON.parse(proxy);

    child = child || {};

    for (i in proxy) {
      if (proxy.hasOwnProperty(i)) {
        child[i] = proxy[i];
      }
    }

    proxy = null;
    return child;
  }
};
export default obj;
