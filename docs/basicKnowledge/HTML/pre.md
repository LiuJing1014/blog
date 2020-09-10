---
title: pre标签
date: 2020-09-05
tags:
 - HTML
---

pre标签：可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

**让其内容折叠，解决文本溢出：**

**解决方法1**：给pre标签定义横向滚动条

```css
pre{
    overflow:auto;
}
```

**解决方法2**：使用text-wrapping

直接定义pre标签里的css属性white-space的值为pre-wrap。

```css
pre{
    white-space:pre-wrap;
}
```

例：

```css
<div  class="left_items">
    <span class="item_title">会议主要内容</span>
    <pre class="item_content">{{otherInfo.contents}}</pre>
</div>

pre{
    white-space:pre-wrap;
    margin-top:0;
}
```



