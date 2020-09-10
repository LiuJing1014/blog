---
title: ES6 数据类型
date: 2020-09-01
tags:
 - ES6
---

数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol 
Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。 每一个 Symbol 的值都是不相等的。

<p style="color:red">Symbol 作为对象属性名时不能用.运算符，要用方括号。</p>

```js
let syObject = {}; 
syObject[sy] = "kk"; 
syObject[sy]; // "kk" 
syObject.sy; // undefined
```