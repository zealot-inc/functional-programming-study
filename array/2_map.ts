// map

const arr: number[] = [1, 2, 3];

const result1: number[] = [];
for (let i = 0; i < arr.length; i++) {
    result1.push(arr[i] * 2);
}
console.log('result 1', result1);

const result2 = arr.map(v => v * 2);
console.log('result 2', result2);

export { }
