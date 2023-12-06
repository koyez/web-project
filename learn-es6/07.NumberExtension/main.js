console.log(0b11110111 === 503) // es6 支持二进制0b开头
console.log(0o767 === 503)      // es6 支持八进制0o开头

Number.isFinite(11)
Number.isNaN(2)

Number.parseInt("12.34") // 12
Number.parseFloat("123.45#")    // 123.45

Number.isInteger(25) // true

Number.EPSILON === Math.pow(2, -52)

Number.EPSILON

// JavaScript 最大保存53个二进制位（相当于16个十进制位），超过精度无法保证，ES6 引入bigint类型，没有位数限制
const a = 1234567n;
const b = 123131241241421412414n;

// BigInt 可以保证精度
a * b 