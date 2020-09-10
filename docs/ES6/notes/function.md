---
title: 函数
date: 2020-09-01
tags:
 - ES6
---


<p style="color:red">注意点：没有 this、super、arguments 和 new.target 绑定。</p>

箭头函数提供了一种更加简洁的函数书写方式。基本语法是：

```js
参数 => 函数体
```

当箭头函数函数体有多行语句，用 **{}** 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 **{}** , 结果会自动返回。

```js
var f = (a,b) => { 
    let result = a+b; 
    return result; 
} f(6,2); // 8
```

当箭头函数要返回对象的时候，为了区分于代码块，要用 **()** 将对象包裹起来

```js
var f = (id,name) => ({id: id, name: name}); 
f(6,2); // {id: 6, name: 2}
```

当箭头函数没有参数或者有多个参数，要用 **()** 括起来。

```js
var f = (a,b) => a+b;
f(6,2); //8
```

