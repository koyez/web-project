// 类实现接口，实现(implements)是面向对象中的一共重要概念。
// 有时，不同的类之间有一些共用的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字实现

// 举例来说，门是一个类，防盗门是门的子类。
// 如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
// 这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：

interface Alram {
    alert(): void;
}

class Door {

}

class SecurityDoor extends Door implements Alram {
    alert() {
        console.log("SecurityDoor alert");
    }
}

class Car implements Alram {
    alert() {
        console.log("Car alert")
    }
}

// 一个类可以实现多个接口
interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car2 implements Alram, Light {
    alert() {

    }

    lightOn() {

    }

    lightOff() {

    }
}

// 接口继承接口
interface LightableAlarm extends Alram {
    lightOn(): void;
    lightOff(): void;
}

// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

// 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。

