/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 17:47:22
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 17:49:11
 * @FilePath: \WEB\OOCL\day6-10\JS-Function-english-2019-10-11-9-58-38-910\2.function2\main.js
 */
function palindrome(message) {
  for (let i = 0; i < message.length; i++) {
    if (message[i] != message[message.length - 1 - i]) return false
  }
  return true
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
console.log(palindrome('hello'));
console.log(palindrome('abcba'));