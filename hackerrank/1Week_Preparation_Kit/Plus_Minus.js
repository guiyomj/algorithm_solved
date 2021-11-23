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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function print(arr, len) {
    return arr.forEach(e => console.log(Math.round(e / len * 1000000) / 1000000))
}

function plusMinus(arr) {
    // Write your code here
    const res = [0, 0, 0]
    arr.forEach(e => {
        res[e > 0 ? 0 : e < 0 ? 1 : 2] += 1
    })
    return print(res, arr.length)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
