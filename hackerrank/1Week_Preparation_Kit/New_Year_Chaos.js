'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    let res = 0
    const len = q.length
    const isNotAchieve = q.some((e, i) => e - i > 3)
    if (isNotAchieve) return console.log('Too chaotic')
    q.forEach((e, i) => {
        if (e === i + 1) return
        let idx = q.findIndex(e => e === i + 1)
        while(idx !== i) {
            [q[idx - 1], q[idx]] = [q[idx], q[idx - 1]]
            idx -= 1
            res += 1
        }
    })
    console.log(res)
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
