function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      continue;
    }
    const remainder = grades[i] % 5;
    if (remainder >= 3) {
      grades[i] = grades[i] + (5 - remainder);
    }
  }
  return grades;
}

const grades = [73, 67, 38, 33];

const result = gradingStudents(grades);

console.log(result);
