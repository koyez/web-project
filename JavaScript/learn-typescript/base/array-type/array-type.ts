// TypeScript中表示数组的方式

// 方式1： 使用类型+方括号。如：number[]
let arr: number[] = [1, 2, 3, 4, 5, 6];
console.log(arr)

// 方式2: 数组范型。Array<number>

let arr2: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arr2)

// 方式3: 使用接口，一般不常用，比起前面两种太复杂
interface NumberArray {
    [index: number]: number
}

let arr3: NumberArray = [1, 2, 3, 4, 5, 6];

