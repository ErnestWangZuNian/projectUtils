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
   * 传入item,从数组中删除它
   * @param {any} array
   * @param {any} item
   */
  deleteItem: (array, item) => {
     let index = array.indexOf(item);
     if(index > -1){
      array.splice(index,1)
     }
     return array
  }
};
export default array;
