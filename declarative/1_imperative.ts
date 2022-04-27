// 単語の配列を巡回して空文字を除外し、最初の文字を大文字に変更する
const words: string[] = ["japan", "", "a", "danny", "x", "", "function", "programming"];
console.log('original', words);

const result: string[] = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length !== 0) {
        const firstChar = words[i].charAt(0).toUpperCase();
        const newWord = firstChar + words[i].substring(1);
        result.push(newWord);
    }
}

console.log('result', result);

export { }
