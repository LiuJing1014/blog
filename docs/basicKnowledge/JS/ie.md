---
title: IE浏览器默认给输入框添加黄色背景
date: 2020-09-09
tags:
 - JS
---

设置输入框的autocomplete="off"

设置css样式：

```css
input[type="text"] {
    background-color: transparent !important;
}
input[type="password"] {
    background-color: transparent !important;
}
```

