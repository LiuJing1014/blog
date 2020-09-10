---
title: 字符串
date: 2020-09-01
tags:
 - ES6
---


-  **includes()**：返回布尔值，判断是否找到参数字符串。 
- **startsWith()**：返回布尔值，判断参数字符串是否在原字符串的头部。 
- **endsWith()**：返回布尔值，判断参数字符串是否在原字符串的尾部。

```js
let string = "apple,banana,orange"; 
string.includes("banana"); // true 
string.startsWith("apple"); // true  
string.endsWith("apple"); // false 
string.startsWith("banana",6) // true
```

- **repeat()**：返回新的字符串，表示将字符串重复指定次数返回。

```js
 console.log("Hello,".repeat(2)); 
 // "Hello,Hello,"
```

- **padStart**()：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
- **padEnd()**：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。

```js
console.log("h".padStart(5,"o")); // "ooooh"
console.log("h".padEnd(5,"o")); // "hoooo"
console.log("h".padStart(5)); // " h"
```

- **模板字符串**：模板字符串相当于加强版的字符串，用反引号 **`**,除了作为普通字符串，还可以用来定义多行字符串，还可以在字符串中加入变量和表达式。       字符串插入变量和表达式。变量名写在 ${} 中，${} 中可以放入 JavaScript 表达式。

```js
let name = "Mike";
let age = 27; 
let info = `My Name is ${name},I am ${age+1} years old next year.` 
console.log(info); 
// My Name is Mike,I am 28 years old next year.
```

   字符串中调用函数：

```js
function f(){ 
	return "have fun!"; 
} 
let string2= `Game start,${f()}`;
console.log(string2); // Game start,have fun!
```



