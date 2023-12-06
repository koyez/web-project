// 在TypeScript中，我们使用接口(interfaces) 来定义对象的类型

// 什么是接口？
// 在面向对象中小红，interfaces是一个重要的概念：它是对行为的抽象，
// 而具体的行动是由类(class) 去实现(implement)

// TypeScript 中的接口是一个非灵活的概念，除了用于对类的一部分行为进行抽象以外，
// 也常用于对【对象的形状(shape)】进行描述。

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: "tom",
    age: 25
};

// 定义的变量比接口多或者少一些属性是不允许的。
// let tom1: Person = {
//     name: "tom",
// }

// let tom2: Person = {
//     name: "tom",
//     age: 25,
//     gender: "male"
// }

// 可选属性
// 可以不用完全匹配一个形状，可以使用可选属性
interface Person1 {
    name: string;
    age?: number;
}

let tom1: Person1 = {
    name: "tom"
}

let tom2: Person1 = {
    name: "tom",
    age: 18,
}

// 任意属性
// 如果希望一个接口具备一个任意的属性，可以使用如下的方式：
interface PersonAny {
    name: string;
    age: number;
    [propName: string]: any;
}

let tomAny: PersonAny = {
    name: "tom",
    age: 18,
    gender: "male",
}


// 注意：一旦定义了任意属性，那么确定属性和可选属性的类型必须是它类型的子集：
interface PersonWhy {
    name: string;
    age?: number;
    [propName: string]: any;
}

// 错误，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了
// let tomWhy: PersonWhy = {
//     name: "tom",
//     age: 25,    // error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
//     gender: "male",
// }

// 只读属性： 可以通过readonly 定义只读属性
interface PersonReadonly {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any
}

let tomReadonly: PersonReadonly = {
    id: 8679,
    name: "tom",
    gender: "male",
}

// tom.id = 8827;  // error: Cannot assign to 'id' because it is a constant or a read-only property