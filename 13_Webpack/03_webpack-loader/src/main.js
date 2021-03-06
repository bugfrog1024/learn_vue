//使用Commonjs的模块化规范
const {add,mul} = require('./js/mathUtils')
console.log(add(20, 30));
console.log(mul(20, 30));

//使用ES6的模块化规范
import {name,age} from './js/info'
console.log(name);
console.log(age);

//依赖css文件
require('./css/normal.css')

//依赖less文件
require('./css/special.less')
document.writeln('<h2>Hello</h2>')