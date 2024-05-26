function plusMinus(arr) {
  // Write your code here
  let positive = 0,
    negative = 0,
    zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  const len = arr.length;
  console.log((positive / len).toFixed(6));
  console.log((negative / len).toFixed(6));
  console.log((zero / len).toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
