/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 17:53:03
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 17:56:25
 * @FilePath: \WEB\OOCL\day6-10\JS-Function-english-2019-10-11-9-58-38-910\4.function4\main.js
 */

function countWords(message) {
  return message.split(' ').length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
console.log(countWords('Good morning, I love JavaScript.'));