function countWords(str) {
    const words = str.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
    const result = {};
    for (const word of words) {
        result[word] = (result[word] || 0) + 1;
    }
    return result;
}
console.log(countWords("Привет мир привет JavaScript мир"));