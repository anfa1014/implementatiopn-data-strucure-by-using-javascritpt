/**
 * 首尾匹配法
 * 首先比较模式串的第一个字符
 * 再比较模式串的最后一个字符
 * 最后比较模式中从第二个到n-1个字符
 */
function fn (s, t) {
    let start_ch = t.slice(0,1),
        end_ch = t.slice(-1),
        length = t.length,
        i = 0 ,
        pos = -1;
    while (i < s.length) {
        if (s[i] != start_ch 
            || s[i+length-1] != end_ch) {
            i++;
        } else {
            let k = i +1,
                j = 1;
            while ( j < length - 1 && s[k] == t[j]) {
                k++;j++;        
            }
            if (j == length -1) {
                pos = k - length + 1;
                break;
            } else i++;
        }
    }
    return pos;
}

console.log(fn('ababababca','ac')) // => -1
console.log(fn('ababababca','abababca')) // => 2