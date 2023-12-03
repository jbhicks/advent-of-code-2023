import { findNumBookends, getFileData } from "../lib/common-functions";

const exampleData = ['eightwothree', '4nineeightseven2', 'two1nine', 'abcone2threexyz', 'xtwone3four', 'zoneight234', '7pqrstsixteen'];
let data = getFileData('data');
data = exampleData;

let answer = 0;

for (let item of data) {
  console.log(item);
  item = replaceWordsWithNumbers(item);
  console.log(item);
  answer += parseInt(item);
  console.log('----------');
}

console.log(`Answer: ${answer}`);

function replaceWordsWithNumbers(item: string): string {
  // create array of all matches in item - 0-9 or one,two,three,four,five,six,seven,eight,nine,zero
  let regExp = /(?=(zero|one|two|three|four|five|six|seven|eight|nine|\d))/g;
  let arr = [...item.matchAll(regExp)].map(match => {
    let value = match[1];
    return isNaN(Number(value)) ? getNumFromWord(value) : value;
  });
  return arr[0] + arr[arr.length - 1];
}

function getNumFromWord(word: string): string {
  //convert word string to integer string
  if (word === 'zero') return '0';
  if (word === 'one') return '1';
  if (word === 'two') return '2';
  if (word === 'three') return '3';
  if (word === 'four') return '4';
  if (word === 'five') return '5';
  if (word === 'six') return '6';
  if (word === 'seven') return '7';
  if (word === 'eight') return '8';
  if (word === 'nine') return '9';
  return '';
}
