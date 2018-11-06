/**
 *  括号匹配问题
 */
const Stack = require('./index');

function mactching (str) {
    let arr = str.split('');
    let stack = new Stack;
    let rules = {
        '(': ')',
        '[': ']'
    };
    
    let output = arr
                .some( item => {
                    if (item === '[' || item == '(') stack.push(item); 
                    else {
                        if (stack.getLength() < 1) {
                            return true;
                        }
                        let left = stack.pop();
                        if (rules[left] != item) {
                            return true;
                        }
                    }
                    return false;
                })
    return !output;
}


console.log(mactching('([]())')); // => true
console.log(mactching('([())')); // => false