type DemoType = {
    val: number;
};

const x: DemoType = {
    val: 2
};


function increment(obj: DemoType) {
    obj.val += 1;
}

function double(obj: DemoType) {
    obj.val *= 2;
}

increment(x);
double(x);

console.log(x.val);

export { }
