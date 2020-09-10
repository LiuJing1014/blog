---
title: 表单验证问题
date: 2020-09-03
tags:
 - Element-ui
---

若在回调函数之前加上return ，则表单无法提交

```js
var validateProgress = (rule, value, callback) => {
    var progress = this.ruleForm.progress
    var reg = /^(?:0|[1-9][0-9]?|100)$/;
    if (!value) {
        callback(new Error('请输入完成进度'));
    }else if (!reg.test(progress)) {
        callback(new Error('请输入0-100以内的正整数'));
    }else{
        callback()
    }
};
```

