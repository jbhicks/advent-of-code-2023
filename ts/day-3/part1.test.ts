import { checkLine, checkCharLocation, isSymbol } from './part1';
import fs from 'fs';
const lines = fs.readFileSync('data', 'utf8').split('\n');

test('checkLine function', () => {
    expect(checkLine(lines[0], 0)).toBe(467);
    // Add more test cases as needed
});

test('checkCharLocation function', () => {
    // Add test cases
});

test('isSymbol function', () => {
    expect(isSymbol('*')).toBe(true);
    expect(isSymbol('1')).toBe(false);
    // Add more test cases as needed
});