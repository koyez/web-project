// 声明文件
// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令

// 什么是声明语句
// 我们想用第三方的的库，如jQuery，在JavaScript中，我们引入jQuery的js文件，然后就可以使用jQuery的全局方法 $ 符号
// TypsScript中这样是不能识别 $ 符号的，所有引入了declare关键字用于声明定义变量的类型
declare var jQuery: (selector: string) => any
jQuery("#myId")

// 什么是声明文件
//  通常我们会将所有声明语句放到一个文件中，这个就叫做声明文件，声明文件必须使用以.d.ts为后缀的文件
// 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。
// /path/to/project
// ├── src
// |  ├── index.ts
// |  └── jQuery.d.ts
// └── tsconfig.json