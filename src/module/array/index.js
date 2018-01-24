let array ={
    //  数组去重
    unique: (array) => {
        let result = [];
        let hash = {};
        array.map(item => {
          let key = typeof(item) + item;
          if(hash[key] !== 1){
            result.push(item);
            hash[key] = 1;
          }
        })
        return result
    }
}
export default  array;