type DemoType = {
    val: number;
};

const x: DemoType = {
    val: 2
};

function increment(obj: DemoType): DemoType {
    const newObj: DemoType = Object.assign({}, obj); // clone
    newObj.val += 1;
    return newObj;
}

function double(obj: DemoType): DemoType {
    const newObj: DemoType = Object.assign({}, obj); // clone
    newObj.val *= 2;
    return newObj;
}

const r1 = increment(x);
const r2 = double(x);

console.log(x.val);
console.log(r1.val);
console.log(r2.val);

export { }
