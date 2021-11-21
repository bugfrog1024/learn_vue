//方式一
var flag = true
function sum(a,b) {
  return a+b
}
export {flag, sum}

//方式二
// export var flag = true;
// export function sum(a,b) {
//   return a+b
// }

// const address = '南京'
// export default address

export default function (args) {
  console.log(args)
}