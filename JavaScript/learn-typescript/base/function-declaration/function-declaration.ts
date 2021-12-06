// 函数声明，TS中函数声明比较简单，就是在参数类型和返回值中加上类型申明

function f(x: number, y: number): number {
    return x + y;
}

// 参数少于或者多余函数声明，是不允许的
// f(1) error:
// f(1, 2, 3): error
console.log(f(1, 2));

// 可选参数
function getName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName
    } else {
        return firstName
    }
}

console.log(getName("petter", "jhon"))
console.log(getName("kl"))


// 默认参数
function buildName(lastName: string = "tom", firstName: string): string {
    return firstName + " " + lastName;
}

// 重载： ts中可以利用联合属性，实现重载。
function reverse(x: string | number): string | number | void {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""))
    } else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}

// 上面表达的不过精确，出入string时，应该返回string， 输入number时，应该返回number，可以利用重载来实现上述功能
function reverse2(x: number): number;
function reverse2(x: string): string;
function reverse2(x: number | string): number | string | void {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""))
    } else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}