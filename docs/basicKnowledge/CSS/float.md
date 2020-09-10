---
title: 在使用float布局时，使用position:absolute让页面占满屏幕
date: 2020-09-09
tags:
 - CSS
---

该布局会有缺陷：子元素内容过多时不会撑开父元素的高度

```html
<div class="top">
    <div class="top_left"></div>
    <div class="top_right"></div>
</div>
<div class="bottom">
    <div class="bottom_left"></div>
    <div class="bottom_right"></div>
</div>
```

```css
*{
    padding: 0;
    margin: 0;
}
#app{
    width:100%;
    height:100%;
}
.top{
    width:100%;
    height:70px;
    background-color: green;
}
.top_left{
    width:200px;
    height:70px;
    float:left;
    background-color: black;
}
.top_right{
    width:200px;
    height: 70px;
    float:right;
    background-color: red;
}
.bottom{
    position: absolute;
    top:70px;
    left:0;
    right:0;
    bottom:0;
}
.bottom_left{
    width:200px;
    background-color: pink;
    position: absolute;
    left:0;
    top:0;
    bottom:0
}
.bottom_right{
    position: absolute;
    top:0;
    left:200px;
    right:0;
    background-color: orange;
    bottom:0
}
```

![Image](/img/float.png)