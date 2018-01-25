import obj from "../object";
let array = {
  /**
   *
   * 数组去重
   * @param {any} array
   * @returns
   */
  unique: array => {
    let result = [];
    let hash = {};
    array.map(item => {
      let key = typeof item + item;
      if (hash[key] !== 1) {
        result.push(item);
        hash[key] = 1;
      }
    });
    return result;
  },
  /**
   * 
   *  从一个数组中去寻找value,找到返回value所在数组索引 ，找不到返回-1
   * @param {any} array 
   * @param {any} value 
   * @returns 
   */
  findValueInArray: (array, value) => {
    let result = -1;
    array.map((item, index) => {
      if (typeof value === "object") {
        obj.equalValue(item, value) ? (result = index) : (result = -1);
      } else {
        console.log(item,value);
        value !== item ? (result = -1) : (result = index);
        console.log(result);
      }
    });
    console.log(result)
    return result;
  },
  /**
   *
   * 传入item,从数组中删除它
   * @param {any} array
   * @param {any} item
   */
  deleteItem: (targetArray, value) => {
    let index = array.findValueInArray(targetArray,value);
    if ( index > -1) {
      targetArray.splice(index, 1);
    }
    return targetArray;
  }
};
export default array;
