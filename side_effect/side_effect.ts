let count = 0;

function increment(): number {
    count++;
    return count;
}

let result = increment();
console.log('result', result);

result = increment();
console.log('result', result);

export { }
