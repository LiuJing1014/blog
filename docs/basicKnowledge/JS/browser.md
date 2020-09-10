---
title: 获取当前浏览器的内核
date: 2020-09-05
tags:
 - JS
---

```js
window.navigator.userAgent
```

判断是否为ie内核：

```js
if (window.navigator.userAgent.indexOf("Trident")>-1) 
```

