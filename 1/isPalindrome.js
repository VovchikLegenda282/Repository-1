function isPalindrome(str) {
    const normalized = str
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]/gi, "");
    return normalized === normalized.split("").reverse().join("");
}
console.log(isPalindrome("А роза упала на лапу Азора")); 
console.log(isPalindrome("JavaScript")); 
