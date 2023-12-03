import { findNumBookends, getFileData } from "../lib/common-functions";

const exampleData = ['eightwothree', '4nineeightseven2', 'two1nine', 'abcone2threexyz', 'xtwone3four', 'zoneight234', '7pqrstsixteen'];
// const data = getFileData('data');
const data = exampleData;

let answer = 0;

for (let item of data) {
  console.log(item);
  item = findFirstAndLastNumbers(item);
  console.log(item);
  answer += parseInt(item);
  console.log('----------');
  // break;
}

console.log(answer);

function findFirstAndLastNumbers(item: string): string {
  const matches = item.match(/(zero|one|two|three|four|five|six|seven|eight|nine|\d)/gi);
  if (matches) {
    return replaceWordsWithNumbers(matches[0] + matches[matches.length - 1]);
  }
  return '';
}
function replaceWordsWithNumbers(item: string): string {
  const numberMap: { [key: string]: string } = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  };

  let replaced = item;

  // replace each spelled out number with its numerical counterpart
  for (let word in numberMap) {
    const regex = new RegExp(word, 'gi');
    replaced = replaced.replace(regex, numberMap[word]);
  }

  return replaced;
}