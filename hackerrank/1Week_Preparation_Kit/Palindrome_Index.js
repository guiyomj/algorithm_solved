'use strict';

const fs = require('fs');

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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

const checkPalindrome = str => {
    const len = str.length
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) return i
    }
    return -1
}

function palindromeIndex(s) {
    const res = checkPalindrome(s)
    if (res < 0) return res
    if (checkPalindrome(s.slice(0, res) + s.slice(res + 1)) < 0) return res
    if (checkPalindrome(s.slice(0, s.length - res - 1) + s.slice(s.length - res)) < 0) return s.length - res - 1
    return -1

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
