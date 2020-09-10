---
title: 模块   export 与 import
date: 2020-09-02
tags:
 - ES6
---

- **基本用法：**

  模块导入导出各种类型的变量，如字符串，数值，函数，类。

  （1）导出的函数声明与类声明必须要有名称（export default 命令另外考虑）。 

  （2）不仅能导出声明还能导出引用（例如函数）。

  （3）export 命令可以出现在模块的任何位置，但必需处于模块（4）顶层。import 命令会提升到整个模块的头部，首先执行。

  ```js
  export { myName, myAge, myfn, myClass } 
  import { myName, myAge, myfn, myClass } from "./test.js";
  ```

- **as 的用法**

  export 命令导出的接口名称，须和模块内部的变量有一一对应关系。导入的变量名，须和导出的接口名称相同，即顺序可以不一致。

  <p style="color:red">不同模块导出接口名称命名重复， 使用 as 重新定义变量名。</p>

  ```js
  import { myName as name1 } from "./test1.js";
  ```

- **export default 命令**

  （1）在一个文件或模块中，export、import 可以有多个，export default 仅有一个。

  （2）export default 中的 default 是对应的导出接口变量。

  （3）通过 export 方式导出，在导入时要加{ }，export default 则不需要。     

  （4）export default 向外暴露的成员，可以使用任意变量来接收。

  ```js
  var a = "My name is Tom!";
  export default a; // 仅有一个 
  export default var c = "error"; 
  // error，default 已经是对应的导出变量，不能跟着变量声明语句 
  import b from "./xxx.js"; // 不需要加{}， 使用任意变量接收
  ```

- **复合使用**

  export 与 import 可以在同一模块使用，使用特点：

  （1）可以将导出接口改名，包括 default。     

  （2）复合使用 export 与 import ，也可以导出全部，当前模块导出的接口会覆盖继承导出的。

  ```js
  /* ------- 特点 1 --------*/
  // 普通改名 
  export { foo as bar } from "methods";
  // 将 foo 转导成 default
  export { foo as default } from "methods"; 
  // 将 default 转导成 foo
  export { default as foo } from "methods"; 
  /* ------- 特点 2 --------*/ 
  export * from "methods";
  ```

  

