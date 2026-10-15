function sortArray(arr, order = "asc") {
    return [...arr].sort((a, b) =>
        order === "asc" ? a - b : b - a
    );
}
console.log(sortArray([5, 2, 8, 1], "asc"));
console.log(sortArray([5, 2, 8, 1], "desc"));
