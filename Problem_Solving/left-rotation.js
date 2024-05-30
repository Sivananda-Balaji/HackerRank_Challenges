function rotateLeft(d, arr) {
  // Write your code here
  const answer = [];
  for (let i = d; i < arr.length; i++) {
    answer.push(arr[i]);
  }
  for (let i = 0; i < d; i++) {
    answer.push(arr[i]);
  }
  return answer;
}

const arr = [1, 2, 3, 4, 5],
  d = 4;

const result = rotateLeft(d, arr);

console.log(result);
