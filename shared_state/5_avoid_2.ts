type DemoChild = {
    score: number;
}

type DemoType = {
    val: number;
    child: DemoChild;
};

const x: DemoType = {
    val: 2,
    child: {
        score: 2
    }
};

function increment(obj: DemoType): DemoType {
    const newObj: DemoType = JSON.parse(JSON.stringify(obj)); // clone
    newObj.val += 1;
    newObj.child.score += 1;
    return newObj;
}

function double(obj: DemoType): DemoType {
    const newObj: DemoType = JSON.parse(JSON.stringify(obj)); // clone
    newObj.val *= 2;
    newObj.child.score *= 2;
    return newObj;
}

const r1 = increment(x);
const r2 = double(x);

console.log(x);
console.log(r1);
console.log(r2);

export { }
