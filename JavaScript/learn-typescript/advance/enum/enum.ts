// 枚举（Enum）类型用于取值限定在一定范围的场景，比如一周有7天。

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 上述例子会编译为：（完成索引和键值同时赋值）
// var Days;
// (function (Days) {
//     Days[Days["Sun"] = 0] = "Sun";
//     Days[Days["Mon"] = 1] = "Mon";
//     Days[Days["Tue"] = 2] = "Tue";
//     Days[Days["Wed"] = 3] = "Wed";
//     Days[Days["Thu"] = 4] = "Thu";
//     Days[Days["Fri"] = 5] = "Fri";
//     Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));


// 手动赋值
// enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
// enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 3); // true
// console.log(Days["Wed"] === 3); // true
// console.log(Days[3] === "Sun"); // false
// console.log(Days[3] === "Wed"); // true

// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
// 编译结果：var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

// 外部枚举
declare enum D {
    Up,
    Down,
    Left,
    Right
}

