---
title: vue初始化页面闪动问题
date: 2020-09-09
tags:
 - VUE
---

使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于`<div>{{}}</div>`的字样，虽然一般情况下这个时间很短暂，但是我们还是有必要让解决这个问题的。

首先：在css里加上

```css
[v-cloak] {display: none;}
```

如果没有彻底解决问题，则在根元素加上

```css
style="display: none;" :style="{display: 'block'}"
```

