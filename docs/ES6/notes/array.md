---
title: 数组
date: 2020-09-01
tags:
 - ES6
---


**扩展运算符(...)**

- 复制数组


```js
let arr = [1, 2],
arr1 = [...arr];
console.log(arr1); // [1, 2]
// 数组含空位
let arr2 = [1, , 3],
arr3 = [...arr2];
console.log(arr3); //[1, undefined, 3]
```

- 合并数组


```js
console.log([...[1, 2],...[3, 4]]); // [1, 2, 3, 4]
```

