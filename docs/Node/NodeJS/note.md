---
title: 下划线(_)变量
date: 2020-09-05
tags:
 - NodeJS
---

可以使用下划线(_)获取上一个表达式的运算结果：

```
$ node
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
```

