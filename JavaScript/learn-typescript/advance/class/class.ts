// ts 中实现了ES6关于class的所有功能，而且还同时增加了一些新的用法。

// ES 6 中类的用法
// 使用 class 定义类， 使用constructor 定义构造函数
// 通过new来生成新实例，并且会自动调用构造函数
class Animal {
    public name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let aa = new Animal('Jack');
console.log(aa.sayHi())

// 类的继承
class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name)
    }
    sayHi() {
        return `Meow, ` + super.sayHi();
    }
}

let c = new Cat("Tom");
console.log(c.sayHi()); // Meow, My Name is Tom

// 存取器
// 使用 getter和 setter可以改变属性的赋值和读取行为

class AnimalChange {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return "Jack";
    }
    set name(value) {
        console.log("setter: " + value);
    }
}

let ac = new AnimalChange("kitty")
ac.name = "Tom"; // setter: tom
console.log(ac.name) // Jack