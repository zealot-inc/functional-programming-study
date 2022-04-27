const scores: number[] = [10, 0, 100, 30, 50, 20, 60, 90, 110];

// 0もしくは100以上の点数を除外した人数を返す

let result = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0 && scores[i] < 100) {
        result++;
    }
}
console.log('result 1', result);

const result2 = scores
    .filter(v => v > 0)
    .filter(v => v < 100)
    .reduce(prev => prev + 1, 0);
console.log('result 2', result2);

export { }
