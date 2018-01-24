let obj = {
  equalValue: (a, b) => {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
      return false;
    }
    aProps.map(item => {
        if(a[item] !== b[item]){
            return false;
        }
    })
    return true;
  }
};
export default obj;
