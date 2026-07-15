/**
 * Get the length of the longest substring without repeating characters
 * @param s The input string
 * @returns The length of the longest substring without repeating characters
 */

// Time Complexity - O(n) where n is the length of the input string
// Space Complexity - O(min(n, m)) where n is the length of the input string and m is the size of the character set

function lengthOfLongestSubstring(s: string) {
    const checkMap = new Map();
    let startI = 0;
    let maxLen = 0;
    for (let endI = 0; endI < s.length; endI++) {
        const char = s[endI];
        if (checkMap.has(char)) {
            maxLen = Math.max(maxLen, endI - startI);
            startI = Math.max(startI, checkMap.get(char) + 1);
        }
        checkMap.set(char, endI);
    }
    maxLen = Math.max(maxLen, s.length - startI);
    return maxLen;
}

console.log("empty", lengthOfLongestSubstring(''));
console.log("space", lengthOfLongestSubstring(' '));
console.log("bbbb", lengthOfLongestSubstring('bbbb'))
console.log("au", lengthOfLongestSubstring('au'));
console.log("cdd", lengthOfLongestSubstring('cdd'));
console.log("aab", lengthOfLongestSubstring('aab'));
console.log("abcbcacab", lengthOfLongestSubstring('abcbcacab'));
console.log("dvdf", lengthOfLongestSubstring('dvdf'));
console.log("pwwekw", lengthOfLongestSubstring('pwwekw'));
