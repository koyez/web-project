// 字符串字面量类型
// 字符串字面量用来约束取值只能是某几个字符串中的一个。

type EventNames = "click" | "scroll" | "mousemove";
function HandleEvent(ele: Element, event: EventNames) {
    // do something
}

HandleEvent(document.getElementById("hello"), "scroll") // ok
// HandleEvent(document.getElementById("Hello"), "dbclick"); // error: event 不能未 dbclick