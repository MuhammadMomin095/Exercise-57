let grades = [95, 67, 75, 78, 84];

let averageGrade = grades.reduce((total, grade) => total + grade, 0) /grades.length

console.log(averageGrade);