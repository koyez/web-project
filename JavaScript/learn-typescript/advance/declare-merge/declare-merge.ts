// 定义多个相同的名字的函数，接口或类，那么它们会合并成一个类型。

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口合并
// 接口中的属性在合并时会简单的合并到一个接口中：
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

// 相当于：
// interface Alarm {
//     price: number;
//     weight: number;
// }