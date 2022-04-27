// 単語の配列を巡回して空文字を除外し、最初の文字を大文字に変更する
const words: string[] = ["japan", "", "a", "danny", "x", "", "function", "programming"];
console.log('original', words);

function convert(word: string): string {
    const firstChar = word.charAt(0).toUpperCase();
    const newWord = firstChar + word.substring(1);
    return newWord;
}

const result = words
    .filter(w => w.length !== 0)
    .map(w => convert(w));


console.log('result', result);

export { }
