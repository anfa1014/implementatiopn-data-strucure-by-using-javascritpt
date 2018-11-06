/**
 *  括号匹配问题
 */
const Stack = require('./index');
function mactching (str) {
    let arr = str.split('');
    let stack = new Stack;
    let isMatched = true;
    let obj = {
        '(': ')',
        '[': ']'
    };
    
    arr.some( item => {
        if (item === '[' || item == '(') {
            stack.push(item);
        } else {
            if (stack.getLength() < 1) {
                isMatched = false;
                return true;
            }
            let left = stack.pop();
            if (obj[left] != item) {
                isMatched = false;
                return true;
            }
        }
        return false;
    })

    return isMatched
}


console.log(mactching('([]())')); // => true
console.log(mactching('([())')); // => false