/**
 * 进制转换
 * 十进制 -> 八进制
 * JS中可以直接用toString和parseInt进行转换
 * 这里仿照C 所以... 
 */
const Stack = require('./index');
function fn (num) {
    let stack = new Stack;
    while (num) {
        stack.push( num % 8 );
        num = parseInt(num/8);
    }
    
    let output = '';
    while (stack.getLength() > 0) {
        output += stack.pop()
    }
    return output
}
console.log(fn(1348))  // => 2504