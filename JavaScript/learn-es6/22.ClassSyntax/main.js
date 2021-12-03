function Point(x, y) {
    this.x  = x;
    this.y = y;
}

Point.prototype.toString = function() {
    console.log("(" + this.x + ", " + this.y + ")");
}

var p = new Point(1, 2)
p.toString() // (1, 2)

// ES6 define class syntax
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        console.log(`(${this.x}, ${this.y})`)
    }
}

var p1 = new Point(2, 3)
p1.toString()   // (2, 3)

// constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
// 一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加

class Point {

}

// 等同于
class Point {
    constructor() {

    }
}

// 类的实例，必须使用new关键字创建
let p = Point(1, 2);    // error
let p2 = new Point(1, 2)    // ok