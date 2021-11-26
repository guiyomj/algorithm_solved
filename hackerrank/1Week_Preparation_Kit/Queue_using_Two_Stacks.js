function processData(input) {
    input = input.split('\n')
    let idx = 0
    const queue = []
    for (let i = 1; i < input.length; i++) {
        const [query, num] = input[i].split(' ')
        switch(query) {
            case '1':
                queue.push(num)
                break
            case '2':
                idx += 1
                break
            case '3':
                console.log(queue[idx])
                break
        }
    }
    // 1: enqueue, 2: dequeue, 3: print frotn element
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
