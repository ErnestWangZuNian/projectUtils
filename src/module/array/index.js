import obj from "../object";
let array = {
  /**
   *
   * 数组去重
   * @param {any} array
   * @returns
   */
  unique: (array,attr) => {
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
   *  从一个数组中去寻找value,找到返回value所在数组第一个索引 ，找不到返回-1
   * @param {any} array
   * @param {any} value
   * @returns
   */
  findValueInArray: (array, value) => {
    let result = -1;
    let tempArray = [];
    array.map((item, index) => {
      if (typeof value === "object") {
        if (obj.equalValue(item, value)) {
          tempArray.push(index);
        }
      } else {
        if (value === item) {
          tempArray.push(index);
        }
      }
    });
    if(tempArray.length === 0){
      result = -1
    }else{
      if(tempArray.length === 1){
        result = tempArray[0]
      }else{
        result = tempArray;
      }
    }
    return result;
  },
  /**
   *
   * 传入item,从数组中删除它
   * @param {any} array
   * @param {any} item
   */
  deleteValue: (targetArray, value) => {
    targetArray =  targetArray.filter(item => {
      if(typeof value === 'object'){
        return obj.equalValue(item, value) === false
      }else{
        return  item !== value
      }
    });
    return targetArray;
  }
};
export default array;
