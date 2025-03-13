// Apples and Oranges

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0,
    orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
const s = 7,
  t = 11,
  a = 5,
  b = 15,
  apples = [-2, 2, 1],
  oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
