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
> 使用  import utils from 'wzn=utils'
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
## math 
[add](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      两个数相加</br>  
[sub](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      两个数相减</br> 
[mul](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      两个数相乘</br> 
[div](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      两个数相除</br>
[adds](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      多个数相加</br>
[subs](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      多个数相减</br>  
[muls](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      多个数相乘</br>  
[divs](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/math/index.js)      多个数相除</br>

## regular 常用正则
[email](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/regular/index.js)      邮箱正则</br>

[phone](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/regular/index.js)      手机号码正则</br>

[account](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/regular/index.js)      账户用户名正则</br>

[password](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/regular/index.js)      密码正则</br>

[idCard](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/regular/index.js)      身份证正则</br>

[bankCard](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/regular/index.js)      银行卡正则</br>

# other 其它常用函数
[formatMoney](https://github.com/ErnestWangZuNian/projectUtils/blob/master/src/module/other/index.js)      金额格式化</br>



  
  

