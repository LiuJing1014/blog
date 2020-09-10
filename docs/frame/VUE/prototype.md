---
title: 全局使用vue中的属性
date: 2020-09-04
tags:
 - VUE
---

在main.js中连接socket，并设置全局使用socket，在其他页面可以通过this.socket使用全局的socket

```js
import io from 'socket.io-client'
const socket = io('http://localhost:5000')
Vue.prototype.socket = socket
```

