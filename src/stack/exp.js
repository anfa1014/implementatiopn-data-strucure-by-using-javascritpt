/**
 * 表达式求值
 * 例如 Exp=a*b+(c-d/e)*f
 * 前缀式 +*ab*-c/def
 * 中缀式 a*b+c-d/e*f
 * 后缀式 ab*cde/-f*+
 */

const Stack = require('./index');

/**
 * 根据 后缀式求表达式值
 */
function fn1 (exp) { 
    /** 
     * fn1只能做简单的0-9运算
    */
    let operators = ['*','/','+','-'];
    let stack = new Stack;
    exp
        .split('')
        .forEach(item => {
            if (operators.indexOf(item) < 0) stack.push(item)
            else {
                let b = stack.pop();
                let a = stack.pop();
                let result = eval(`${a}${item}${b}`);
                stack.push(result);
            }
        })
    return stack.pop();
}
console.log(fn1('12*842/-1*+')) // => 8 

/**
 * 根据原表达式求得后缀式
 * 原表达式：a*b+(c-d/e)*f
 * 后缀式：ab*cde/-f*+ 
 */
function fn2 (exp) {
    let stack = new Stack;
    let output = '';
    let arr = exp.split('');
    let operators = {
        '*': 1,
        '/': 1,
        '+': 0,
        '-': 0,
        '#': -1,
        '(': -1,
        ')': -1
    };

    stack.push('#');

    while ( arr.length > 0 ) {
        let ch = arr.shift();
        if (ch in operators) {
            switch (ch) {
                case '(':
                    stack.push(ch)
                    break;
                case ')':
                    let top = stack.pop();
                    while (top != '(') {
                        output += top;
                        top =stack.pop();
                    }
                    break;
                default: 
                    while (operators[stack.getElement()] > operators[ch]) {
                        output += stack.pop();
                    }
                    if (ch != '#') stack.push(ch);
                    break;

            }
        } else output += ch;
    }
    while (stack.getElement()) {
        let top = stack.pop();
        if (top != '#') output += top;
    }
    return output;
}
console.log(fn2('a*b+(c-d/e)*f')) // => ab*cde/-f*+