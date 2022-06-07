/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 17:49:50
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 17:51:24
 * @FilePath: \WEB\OOCL\day6-10\JS-Function-english-2019-10-11-9-58-38-910\3.function3\main.js
 */
function alphabetSort(message) {
  return message.split('').sort().join('')

}
alphabetSort('hello'); // should return 'ehllo'
console.log(alphabetSort('hello'));