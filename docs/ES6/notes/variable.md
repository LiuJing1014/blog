---
title: 对于let、const和var
date: 2020-09-02
tags:
 - ES6
---

<p style="color:red">* 代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。代码块内，在声明变量 PI 之前使用它会报错。</p>

- let声明的变量只在let命令代码所在的代码块内有效，let只能声明一次

- const声明的变量的值不能改变，一旦声明必须初始化

- var是在全局范围内有效，var可以声明多次

- let 不存在变量提升，var 会变量提升 

  ```js
  console.log(a); //ReferenceError: a is not defined 
  let a = "apple"; 
  
  console.log(b); //undefined 
  var b = "banana";
  ```

- for 循环计数器很适合用 let

  ```js
  for (var i = 0; i < 10; i++) { 
      setTimeout(function(){ 
      	console.log(i);
      }) 
  }
  // 输出十个 10 
  for (let j = 0; j < 10; j++) { 
      setTimeout(function(){ 
      	console.log(j); 
      }) 
  } 
  // 输出 0123456789
  ```

