function arraysIntersect(arr1, arr2) {
    const set = new Set(arr1);

    return arr2.some(item => set.has(item));
}
console.log(arraysIntersect([1, 2, 3], [3, 4, 5]));
console.log(arraysIntersect([1, 2, 3], [4, 5, 6]));
function getIntersection(arr1, arr2) {
    const set = new Set(arr2);
    return [...new Set(arr1)].filter(item => set.has(item));
}
console.log(getIntersection([1, 2, 3, 3], [2, 3, 4]));
