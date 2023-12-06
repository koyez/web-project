// 类型别名就是给类型取一个新的名字

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getNameFunc(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    } else {
        return n();
    }
}