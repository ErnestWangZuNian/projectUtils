import array from './module/array';
import date from './module/date';
import obj from './module/object';
import math from './module/math';
import regular from './module/regular';
import other from './module/other';
import storage from './module/storage';

let utils = {
  array,
  date,
  obj,
  math,
  regular,
  other,
  storage,
  isArray: (target) => Object.prototype.toString.call(target) === '[object Array]',
  isFunction: (target) => Object.prototype.toString.call(target) === '[object Function]',
  isBoolean: (target) => Object.prototype.toString.call(target) === '[object Boolean]',
  isObject: (target) => Object.prototype.toString.call(target) === '[object Object]',
  isEmoptyObject: (target) => {
    let result = false;
    if (!Object.keys(target).length) {
      result = true;
    }
    return result;
  },
  isNumber: (target) => Object.prototype.toString.call(target) === '[object Number]',
  isString: (target) => Object.prototype.toString.call(target) === '[object String]',
};

console.log()

export default utils;
