import { getFileData } from "../lib/common-functions";

const bagContents = { 'red': 12, 'green': 13, 'blue': 14 };

let data = getFileData("data");
let mappedData = data.map(item => {
    let match = item.match(/Game (\d):/);
    let gameNumber = match ? match[1] : null;
    item = item.replace(/Game \d: /g, '');
    let moves = item.split(';').map(move =>
        move.split(',').map(item => {
            let [count, color] = item.trim().split(' ');
            return { [color]: parseInt(count), 'isValid': true };
        })
    );
    return moves;
});

for (let game of mappedData) {
    for (let move of game) {
        for (let ball of move) {
            if (typeof ball['red'] === 'number' && typeof bagContents['red'] === 'number') {
                ball['isValid'] = ball['red'] <= bagContents['red'];
            }
            if (typeof ball['blue'] === 'number' && typeof bagContents['blue'] === 'number') {
                ball['isValid'] = ball['blue'] <= bagContents['blue'];
            }
            if (typeof ball['green'] === 'number' && typeof bagContents['green'] === 'number') {
                ball['isValid'] = ball['green'] <= bagContents['green'];
            }
        }
    }
    console.log(game);
    console.log('----------------');
    break;
}

// filter out mappedData where any game's moves contain an invalid ball
mappedData = mappedData.filter(game => {
    return game.every(move => {
        return move.every(ball => {
            return ball['isValid'];
        });
    });
});
console.log(JSON.stringify(mappedData, null, 2));