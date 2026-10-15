function secondLargestUnique(arr) {
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique.length >= 2 ? unique[1] : null;
}
console.log(secondLargestUnique([5, 8, 8, 3, 10, 10]));
console.log(secondLargestUnique([7, 7, 7]));
