const arr: number[] = [1, 2, 3, 4, 5];

// 合計

let result1 = 0;
for (let i = 0; i < arr.length; i++) {
    result1 += arr[i];
}
console.log('result 1', result1);

const result2 = arr.reduce((prev, v) => prev + v, 0);
console.log('result 2', result2);

export { }
