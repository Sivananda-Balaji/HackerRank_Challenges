function reverseArray(a) {
  // Write your code here
  let left = 0,
    right = a.length - 1;
  while (left < right) {
    [a[left], a[right]] = [a[right], a[left]];
    left++;
    right--;
  }
  return a;
}

const arr = [2, 3, 4, 1];

const result = reverseArray(arr);

console.log(result);
