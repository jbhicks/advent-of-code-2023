import { findNumBookends } from "../lib/common-functions";

const exampleData = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
let answer = 0;

for (let item of exampleData) {
  const nums = findNumBookends(item);
  answer += parseInt(nums);
}
console.log(answer);





