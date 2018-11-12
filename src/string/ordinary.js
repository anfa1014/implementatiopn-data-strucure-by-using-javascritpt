/**
 * 简单解法
 */
function fn (s,t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            i = i-j+1;
            j = 0;
        }
    }
    return j >= t.length ? i-j : -1; 
}

console.log(fn('ababababca','ac')) // => -1
console.log(fn('ababababca','abababca')) // => 2
 