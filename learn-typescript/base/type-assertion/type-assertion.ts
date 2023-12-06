// 类型断言（type assertion）: 可以用来手动指定一个值的类型
// 语法： 值 as 类型
// 或： <类型>值


// 常见用途：将一个联合类型转换为其中一个类型
interface Cat {
    name: string
    run(): void
}

interface Fish {
    name: string
    swim(): void
}

// 只能访问公共的属性或者变量
function getName2(animal: Cat | Fish): string {
    return animal.name
}

// 如果有时候需要访问联合类型的中一种特定的属性和方法，下面方法是不行的。
// function isFish(animal: Cat | Fish): boolean {
//     if (typeof animal.swim === "function") { Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat
//         return true;
//     }
//     return false;
// }

// 这时候就可以使用类型断言，将animal断言为Fish

function isFish(animal: Cat | Fish): boolean {
    if (typeof (animal as Fish).swim === "function") {
        return true;
    }
    return false;
}

// 用法2: 将一个父类断言为更具体的子类
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error): boolean {
    if (typeof (error as ApiError).code === "number") {
        return true;
    }
    return false;
}

// 用法3: 将一个任意类型断言为any
// window.foo = 1  // error: Property 'foo' does not exist on type 'Window & typeof globalThis'

// 可以临时将windows断言为any类型
(window as any).foo = 1;

// 不建议使用 as any


// 将any类型断言为指定的类型
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
