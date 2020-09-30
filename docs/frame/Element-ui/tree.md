---
title: 关闭el-tree所有叶子节点
date: 2020-09-30
tags:
 - Element-ui
---

```html
<el-tree :data="list" :props="propsTree" accordion @node-click="handleNodeClick" ref="tree"></el-tree>
```

```js
closeBox(){
    //关闭展开的叶子
    var nodes = this.$refs.tree.store.root.childNodes;
    for (var i in nodes) {
        nodes[i].expanded = false;
    }
}
```

