import {flag,sum} from './export.js'
console.log(flag);
console.log(sum(20, 30));

// import addr from './export.js'
// console.log(addr);

import print_func from './export.js'
print_func('Hello')

import * as ex_module from './export.js'
console.log(ex_module.flag)