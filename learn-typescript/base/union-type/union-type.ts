//  联合类型(Union Types) 表示取值可以未多种类型中的一种。

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven'
myFavoriteNumber = 7

// 访问联合类型的属性或方法
// 但typescript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问所有类型的共用属性或方法

// function getLength(something: string | number): number {
//     // return something.length;    // Error: number 类型不具备length属性 

// }

function getString(something: string | number): string {
    return something.toString();    // OK: string and number type has toString function
}
