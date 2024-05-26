function timeConversion(s) {
  // Write your code here
  const timeArr = s.split(":");
  const hasAM = timeArr[2].includes("AM");
  const hasPM = timeArr[2].includes("PM");
  if (hasAM && timeArr[0] === "12") {
    timeArr[0] = "00";
  } else if (hasPM && timeArr[0] !== "12") {
    timeArr[0] = Number(timeArr[0]) + 12;
  }
  timeArr[2] = timeArr[2].slice(0, 2);
  return timeArr.join(":");
}

const s = "07:05:45PM";

const result = timeConversion(s);

console.log(result);
