---
title: js中的小知识点
date: 2020-09-09
tags:
 - JS
---

- 从后到前获取数组项

  ```js
  var arr = [1,2,3,4,5]
  console.log(arr.slice(-1)  //[5]
  console.log(arr.slice(-2)  //[4,5]
  console.log(arr.slice(-3)  //[3,4,5]
  ```

- 前者条件为真时再执行后面的函数

  ```js
  callback && callback()
  ```

- 使用 || 设置变量默认值

  ```js
  var a;
  a = a || 'default value"
  consoel.log(a) //default value
  ```

  