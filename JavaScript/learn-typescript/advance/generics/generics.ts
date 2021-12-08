// 泛型(Generics)是指在定义函数，接口或类的时候，不预先指定具体的类型，而是使用的时候再指定类型的一种特性。

// 简单例子1： 实现createArray
function createArray(length: number, value: any): Array<any> {
    let result = []
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result
}

createArray(3, "x") // ["x", "x", "x"]

// 它并没有准确的定义返回值的类型：Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
// 使用泛型
function createArrayWithGenerics<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArrayWithGenerics<string>(3, "x") // ["x", "x", "x"]

// 我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。

// 接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来


// 多个类型参数
function swap<T, U>(tuple: [T,U]): [U, T] {
    return [tuple[1], tuple[0]]
}

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length) // error
    return arg
}
// 上例中，泛型 T 不一定包含属性 length，所以编译的时候报错

// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 泛型接口（generics interface）
interface CreateArrayFunc {
    <T>(lenght: number, value: T): Array<T>;
};
let createArrayF: CreateArrayFunc;
createArrayF = function<T>(lenght: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; }