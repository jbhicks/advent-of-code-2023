import * as fs from 'fs';

export function findNumBookends(str: string): string {
    const stripped = str.replace(/\D/g, '');
    if (stripped.length === 2) return stripped;
    return stripped[0] + stripped[stripped.length - 1];
}

export function getFileData(filename: string) {
    const fileData = fs.readFileSync(filename)
        .toString('utf8')
        .split('\n');
    return fileData;
}

export function getNumFromString(input: string): number {
    const stripped = Array.from(input).filter(item => { return parseInt(item) });
    if (stripped.length === 2) return parseInt(stripped.join().replace(',', ''));
    else return parseInt(stripped[0] + stripped[stripped.length - 1]);
}

export function isDigit(char: string): boolean {

    return (/\d/.test(char));
}