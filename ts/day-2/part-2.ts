import { getFileData } from "../lib/common-functions";
interface BagContents {
    [color: string]: number;
}
const bagContents: BagContents = { red: 12, green: 13, blue: 14 };

// let data = getFileData("data");
let data = getFileData("exampleData");
let answer = 0;

for (let line of data) {
    const gameNumber = parseInt(line.substring(4, line.indexOf(":")));
    line = line.substring(line.indexOf(":") + 1);
    const ballStrings = line.split(/[,;]/).map(s => s.trim());
    let isValid = true;
    let balls: Array<{ color: string, count: number }> = [];

    line = line.substring(line.indexOf(":") + 1);
    for (let ballString of ballStrings) {
        const ballCount = parseInt(ballString.substring(0, ballString.indexOf(" ")));
        const ballColor = ballString.substring(ballString.indexOf(" ")).trim();
        balls.push({ color: ballColor, count: ballCount });
    }
    console.log(balls);

}

console.log(`Answer: ${answer}`);
