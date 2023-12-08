import { check } from 'yargs';
import { isDigit } from '../lib/common-functions';
const fs = require('fs');
// const lines = fs.readFileSync('data', 'utf8').split('\n');
let answer = 0;

const lines = [
    '467..114..', '...*......',
    '..35..633.', '......#...',
    '617*......', '.....+.58.',
    '..592.....', '......755.',
    '...$.*....', '.664.598..'
]

console.log(lines);
for (let line of lines) {
    answer += checkLine(line, lines.indexOf(line));
    console.log(`added ${checkLine(line, lines.indexOf(line))} to answer, which is now ${answer}`);
}


export function checkLine(line: string, lineNum: number): number {
    let numStartEnd = { start: 0, end: 0 };
    let isAdjacent = false;
    let lineNumberValue = 0;
    let numStarted = false;

    for (let i = 0; i < line.length; i++) {
        if (isDigit(line[i])) {
            if (!isAdjacent) isAdjacent = checkCharLocation(lineNum, i);
            // track if we're making a new number
            if (!numStarted) {
                numStartEnd.start = i;
                numStarted = true;
            } else if (i === line.length - 1 || !isDigit(line[i + 1])) {
                numStartEnd.end = i;
                numStarted = false;

                const num = parseInt(line.slice(numStartEnd.start, numStartEnd.end + 1));
                if (isAdjacent) {
                    lineNumberValue += num;
                    isAdjacent = false; // Reset isAdjacent for the next number
                }
            }
        }
    }
    return lineNumberValue;
}

export function checkCharLocation(x: number, y: number): boolean {
    if ((y > 0 && isSymbol(lines[x][y - 1])) || (y < lines[x].length - 1 && isSymbol(lines[x][y + 1]))) return true;
    if (x > 0 && ((isSymbol(lines[x - 1][y])) || (y > 0 && isSymbol(lines[x - 1][y - 1])) || (y < lines[x - 1].length - 1 && isSymbol(lines[x - 1][y + 1])))) return true;
    if (x < lines.length - 1 && ((isSymbol(lines[x + 1][y])) || (y > 0 && isSymbol(lines[x + 1][y - 1])) || (y < lines[x + 1].length - 1 && isSymbol(lines[x + 1][y + 1])))) return true;
    return false;
}

export function isSymbol(char: string): boolean {
    return (/[^a-zA-Z0-9.]/.test(char));
}