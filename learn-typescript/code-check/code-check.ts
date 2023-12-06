// TypeScript官方决定采用ESLint作为代码检查工具，并新创建一个一个项目
// typescript-eslint.

// 在TypeScript总使用ESLint
// 安装ESLint
// npm install --save-dev eslint

// 替代ESLint默认的解析器
// npm install --save-dev typescript @typescript-eslint/parser

// 安装默认规则，提供了一些而外的ts语法规则
// npm install --save-dev @typescript-eslint/eslint-plugin


// 创建配置文件
// 一般配置文件名是.eslintrc.js 或者 .eslintrc.json

//如我们在项目根目录创建一个 .eslintrc.js,内容如下；
// module.exports = {
//     parser: '@typescript-eslint/parser',
//     plugins: ['@typescript-eslint'],
//     rules: {
//         // 禁止使用 var
//         'no-var': "error",
//         // 优先使用 interface 而不是 type
//         '@typescript-eslint/consistent-type-definitions': [
//             "error",
//             "interface"
//         ]
//     }
// }



// 检查一个 ts 文件
// ./nodel_modules/.bin/eslint index.ts

// 每次这样执行非常不便，我们可以通过在package.json添加一个script 来创建一个 npm script 来简化这个步骤。
// {
//     "script": {
//         "eslint": "eslint index.ts"
//     }
// }
// 只需要执行nup run eslint 即可。
// 检查这个项目的的ts文件。
// 项目源码一般放到src目录下。
// {
//     "scripts": {
//         "eslint": "eslint src --ext .ts"
//     }
// }
// 此时执行 npm run eslint 即会检查 src 目录下的所有 .ts 后缀的文件




// 使用 Prettier 修复格式错误
// ESLint 包含了一些代码格式的检查，比如空格、分号等。但前端社区中有一个更先进的工具可以用来格式化代码，那就是 Prettier。
// Prettier 聚焦于代码的格式化，通过语法分析，重新整理代码的格式，让所有人的代码都保持同样的风格。

// 安装
// npm install --save-dev prettier