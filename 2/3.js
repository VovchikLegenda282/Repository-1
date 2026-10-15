function sumAndAverage(arr) {
    if (arr.length === 0) {
        return { sum: 0, average: null };
    }
    const sum = arr.reduce((total, num) => total + num, 0);
    return {
        sum,
        average: sum / arr.length
            };
}
console.log(sumAndAverage([2, 4, 6, 8]));