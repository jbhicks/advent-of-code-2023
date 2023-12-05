import { getFileData } from "../lib/common-functions";
const bagContents = { red: 12, green: 13, blue: 14 };

let data = getFileData("data");

let mappedData = data.map((item) => {
  item = item.replace(/Game \d: /g, "");
  let moves = item.split(";").map((move) =>
    move.split(",").map((item) => {
      let [count, color] = item.trim().split(" ");
      console.log({
        [color]: parseInt(count),
        isValid: bagContents[color] >= count,
      });
      return { [color]: parseInt(count), isValid: bagContents[color] >= count };
    })
  );
  return moves;
});

let answer = 0;

for (let game in mappedData) {
  mappedData[game].isValid = mappedData[game].every((move) =>
    move.every((ball) => ball["isValid"])
  );
  console.log(`Game ${parseInt(game) + 1}: ${mappedData[game].isValid}`);
  if (mappedData[game].isValid) answer += parseInt(game) + 1;
}
console.log(`Answer: ${answer}`);
