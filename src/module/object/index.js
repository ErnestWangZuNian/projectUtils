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
        if(typeof a[item] === 'object'){
          result = obj.equalValue(a[item],b[item]);
        }else{
          if (a[item] !== b[item]) {
            result = false;
          }
        }
       
      });
    }

    return result;
  }
};
export default obj;
