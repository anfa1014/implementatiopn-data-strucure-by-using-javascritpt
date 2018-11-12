/**
 * KMP算法
 */
function fn (s, t) {
    let i = 0,
        j = 0,
        next = getNext(t);
        // console.
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    return j >= t.length ? i-j : -1; 
}
/**
 * 根据输入值t，得到pwt数组
 * 根据数组推算得到next数组
 */
function getNext (t) {
    t = t.split('');
    let next = [];
    let i = 0,
        j = 0;
    while (i < t.length) {
        if (i == 0) next[i++] = 0;
        else if (t[i] == t[j]) next[i++] = (j++)+1;
        else {
            next[i++] = 0;
            j = 0;
        }
    }
    next.unshift(-1);
    next.pop();
    return next;
}

console.log(fn('ababababca','ac')) // => -1
console.log(fn('ababababca','abababca')) // => 2