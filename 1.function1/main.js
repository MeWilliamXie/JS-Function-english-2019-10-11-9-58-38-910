/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 17:37:25
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 17:39:50
 * @FilePath: \WEB\OOCL\day6-10\JS-Function-english-2019-10-11-9-58-38-910\1.function1\main.js
 */
function reverseString(message) {
  let result = []
  for (let i = message.length - 1; i >= 0; i--) {
    result.push(message[i])
  }
  return result.join('')
}
reverseString('hello'); // should return 'olleh'
console.log(reverseString('hello'));