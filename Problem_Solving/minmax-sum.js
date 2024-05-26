function miniMaxSum(arr) {
  // Write your code here
  let min = Infinity,
    max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let answer = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        answer += arr[j];
      }
    }
    max = answer > max ? answer : max;
    min = answer < min ? answer : min;
  }
  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);
