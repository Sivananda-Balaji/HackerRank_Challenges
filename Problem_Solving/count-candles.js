function birthdayCakeCandles(candles) {
  // Write your code here
  let max = -Infinity;
  for (let i = 0; i < candles.length; i++) {
    max = candles[i] > max ? candles[i] : max;
  }
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    candles[i] === max && count++;
  }
  return count;
}

const result = birthdayCakeCandles([3, 2, 1, 3]);

console.log(result);
