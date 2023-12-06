

const foo = "bar";
const baz = {foo};
baz // {foo: "bar"}

// equals
const baz = {foo: foo}

// 对象方法简写
function f(x, y) {
    return {x, y}
}
// equals
function f(x, y) {
    return {x: x, y: y}
}