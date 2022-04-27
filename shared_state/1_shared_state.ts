type DemoType = {
    val: number;
};

// Shared state
const x: DemoType = {
    val: 2
};


// Mutates shared state
function increment() {
    x.val += 1;
}

function double() {
    x.val *= 2;
}

increment();
double();

console.log(x.val);

export { }
