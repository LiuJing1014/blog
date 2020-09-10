---
title: 在Element-ui中的表格使用过滤器
date: 2020-09-03
tags:
 - Element-ui
---

**在表格的列中使用template进行穿插**
```html
<el-table-column label="体系" prop="functionSystem">
    <template slot-scope="scope">
        <p>{{scope.row.functionSystem | systemFilter}}</p>
    </template>
</el-table-column>
```

