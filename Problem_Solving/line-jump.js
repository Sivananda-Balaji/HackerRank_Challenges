//Number Line Jumps

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  }
  if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) > 0) {
    return "YES";
  }
  return "NO";
}

const x1 = 0,
  v1 = 3,
  x2 = 4,
  v2 = 2;

const result = kangaroo(x1, v1, x2, v2);

console.log(result);
