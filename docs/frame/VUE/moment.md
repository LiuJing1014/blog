---
title: 使用moment函数可以解决时间过滤器在ie浏览器不兼容的问题
date: 2020-09-04
tags:
 - VUE
---

```js
Vue.filter("time", function(value, formatString) {
    formatString = formatString || "YYYY-MM-DD HH:mm:ss";
    return moment(value).format(formatString);
});
```

