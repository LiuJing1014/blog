---
title: 省略号的显示
date: 2020-09-09
tags:
 - CSS
---

单行文本实现方法：

```
span{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```

多行文本溢出显示省略号实现方法：

```
p{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3; //3为行数，可修改
	overflow: hidden
}
```

扩展资料：

**-webkit-line-clamp**用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的**WebKit**属性。常见结合属性：

**display: -webkit-box**; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。

**-webkit-box-orient** 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。