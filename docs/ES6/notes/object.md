---
title: 对象
date: 2020-09-02
tags:
 - ES6
---

- **拓展运算符（...）**：用于取出参数对象所有可遍历属性然后拷贝到当前对象。

  ```js
   let person = {name: "Amy", age: 15}; 
   let someone = { ...person }; someone; 
   //{name: "Amy", age: 15}
  ```

  可用于合并两个对象：

  ```js
  let age = {age: 15}; 
  let name = {name: "Amy"}; 
  let person = {...age, ...name}; person; 
  //{age: 15, name: "Amy"}
  ```

- **Object.assign(target, source_1, ···)**：用于将源对象的所有可枚举属性复制到目标对象中。

  ```js
  let target = {a: 1};
  let object2 = {b: 2};
  let object3 = {c: 3};
  Object.assign(target,object2,object3); // 第一个参数是目标对象，后面的参数是源对象
  target; // {a: 1, b: 2, c: 3}
  ```

  数组的处理

  ```js
  Object.assign([2,3], [5]); // [5,3]
  ```

  会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0。

- **Object.is(value1, value2)**

  用来比较两个值是否严格相等，与（===）基本类似。

  与（===）的区别：

  ```js
  //一是+0不等于-0
  Object.is(+0,-0); //false
  +0 === -0 //true
  //二是NaN等于本身
  Object.is(NaN,NaN); //true
  NaN === NaN //false
  ```

  

