function staircase(n) {
  // Write your code here
  let answer = "";
  for (let i = n; i >= 0; i--) {
    answer = "";
    for (let j = 0; j < n; j++) {
      if (i <= j) {
        answer += "#";
      } else {
        answer += " ";
      }
    }
    if (answer.includes("#")) {
      console.log(answer);
    }
  }
}

staircase(5);
