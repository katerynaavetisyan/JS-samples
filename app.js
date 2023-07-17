const exams = [80, 98, 92, 78, 88, 90, 89, 81, 77]

console.log(exams.every(score => score >= 75));
console.log(exams.some(score => score >= 75));