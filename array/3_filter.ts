const arr: number[] = [1, 2, 3, 4, 5, 6];

// 3より大きい数字を探す

const result1: number[] = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        result1.push(arr[i]);
    }
}
console.log('result 1', result1);

const result2 = arr.filter(v => v > 3);
console.log('result 2', result2);

export { }
