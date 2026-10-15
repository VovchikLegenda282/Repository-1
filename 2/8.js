function averageGrade(grades) {
    if (grades.length === 0) {
        return null;
    }
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}
console.log(averageGrade([5, 4, 3, 5, 4]));