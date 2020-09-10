---
title: 当缩小浏览器页面时，控制表格出现滚动条
date: 2020-09-09
tags:
 - CSS
---

```css
// 为表格添加滚动条
table{
    display: block;
    overflow: auto;  //显示滚动条
    white-space: nowrap; //表格内容强制不换行
}
```

