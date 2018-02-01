let date = {
  /**
   *
   * 格式化日期，如date.format('yyyy-MM-dd') = '2018-1-30' date.format('yyyy/MM/dd') = '2018/1/30'
   * @param {any} fmt
   * @param {any} current
   * @returns
   */
  format: (fmt, currentDate) => {
    let date = new Date(currentDate) || new Date();
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
      "H+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };
    let week = {
      "0": "/u65e5",
      "1": "/u4e00",
      "2": "/u4e8c",
      "3": "/u4e09",
      "4": "/u56db",
      "5": "/u4e94",
      "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        `${date.getFullYear()}`.substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  },
  /**
   *
   * 只显示日期的年月日
   * @param {any} currentDate
   * @param {string} [fmt="yyyy-MM-dd"]
   * @returns
   */
  nyr: (currentDate, fmt = "yyyy-MM-dd") => {
    return date.format(fmt, currentDate);
  },
  /**
   * 
   * 只显示日期的时分秒
   * @param {any} currentDate 
   * @param {string} [fmt="hh:mm:ss"] 
   * @returns 
   */
  sfm: (currentDate, fmt = "hh:mm:ss") => {
    return date.format(fmt, currentDate);
  }
};
export default date;
