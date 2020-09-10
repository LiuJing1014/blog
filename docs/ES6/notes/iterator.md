---
title: 迭代器
date: 2020-09-02
tags:
 - ES6
---


以下是可迭代的值:Array、String、Map、Set

```js
const nums = ["zero", "one", "two"]; 
for (let num of nums) { console.log(num); }
```

<p style="color:red">of 操作数必须是可迭代，这意味着如果是普通对象则无法进行迭代。如果数据结构类似于数组的形式，则可以借助 Array.from() 方法进行转换迭代。</p>

```js
for (let item of Array.from(arrayLink)) { 
    console.log(item); 
}
```

