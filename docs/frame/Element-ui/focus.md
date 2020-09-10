---
title: 判断没有填写内容时进行聚焦
date: 2020-09-03
tags:
 - Element-ui
---

在组件后面添加ref属性，当为空时触发其聚焦函数

```html
<el-select v-model="formInline.updateKind"  placeholder="进度更新" ref="inputKind">
     <el-option label="进度更新"  value="1"></el-option>
     <el-option label="完成任务" value="2"></el-option>
</el-select>
```

```js
if(!kind){
    that.$nextTick(() => {
    	that.$refs.inputKind.focus()
    })
    return;
}
```

