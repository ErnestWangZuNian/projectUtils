# projectUtils
## 前端业务常用代码工具库
> 目的：提高工作效率，少做一些无用功
***
业务开发过程中，会经常用到数组去重、日期格式化、缓存数据等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。
***
## 安装使用
> 1：使用npm安装
## npm
> npm install --save-dev wzn-utils
## API文档
***
## Array<br>
[unique](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/array/index.js)     数组去重</br>
[findValueInArray](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/array/index.js)      从数据寻找某个值，如果有多个返回一个数组索引，如果没有，返回-1</br>
[deleteValue](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/array/index.js)     删除数组中的对应值</br>

## object
[equalValue](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/object/index.js)      判断两个对象值是否相等


## date
[format](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/date/index.js)      格式化日期</br>
[nyr](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/date/index.js)      只显示日期的年月日</br>
[sfm](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/date/index.js)      只显示日期的时分秒</br>

