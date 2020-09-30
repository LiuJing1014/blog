---
title: 修改浏览器滚动条的样式
date: 2020-09-30
tags:
 - CSS
---

- IE滚动条颜色设置

  ```css
  body {
      scrollbar-arrow-color:#f2f2f3;  /*上下箭头*/
      scrollbar-track-color:#1589ce;  /*底层背景色*/
      scrollbar-face-color:#27aeff;   /*滚动条前景色*/
      scrollbar-Shadow-color:#1589ce; /*滚动条边线色*/
  }
  ```

- 谷歌浏览器中滚动条的样式修改

  ```css
  ::-webkit-scrollbar-track{
      background-color: #fff;
  }
  ::-webkit-scrollbar{
      width: 4px;
      height: 4px;
      background-color: #fff;
  }
  ::-webkit-scrollbar-thumb{
      background-color: $theme-color;
  }
  ```

  <p style="color:red">火狐暂时不支持该功能！！！</p>