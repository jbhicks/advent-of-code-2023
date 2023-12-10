import { getFileData } from "../lib/common-functions";

let data = getFileData("data");
// let data = getFileData("exampleData");
let powers: Array<number> = [];
let answer = 0;

for (let line of data) {
  line = line.substring(line.indexOf(":") + 1);
  const ballStrings = line.split(/[,;]/).map((s) => s.trim());
  let balls: Array<{ color: string; count: number }> = [];
  line = line.substring(line.indexOf(":") + 1);

  for (let ballString of ballStrings) {
    const ballCount = parseInt(
      ballString.substring(0, ballString.indexOf(" "))
    );
    const ballColor = ballString.substring(ballString.indexOf(" ")).trim();

    balls.push({ color: ballColor, count: ballCount });
  }
  // reduce the balls array to only contain one of each color, highest count wins
  balls = balls.reduce((acc, cur) => {
    const existingBall = acc.find((ball) => ball.color === cur.color);
    if (existingBall) {
      if (existingBall.count < cur.count) {
        existingBall.count = cur.count;
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log(balls);

  const power = balls.reduce((acc, cur) => acc * cur.count, 1);
  powers.push(power);
  console.log("-----------------");
}
// add up the powers
answer = powers.reduce((acc, cur) => acc + cur, 0);
console.log(powers);
console.log(`Answer: ${answer}`);
