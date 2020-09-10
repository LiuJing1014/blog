---
title: 合并表格的行
date: 2020-09-09
tags:
 - JS
---

```html
<table class="tableContainer">
    <thead>
        <tr>
            <td style="width:150px"><span class="text">序号</span></td>
            <td style="width:250px"><span class="text">一级分类</span></td>
            <td style="width:250px"><span class="text">二级分类</span></td>
            <td style="width:320px"><span class="text">xxx产品名称</span></td>
            <td style="width:320px"><span class="text">xxx产品编码</span></td>
            <td style="width:320px"><span class="text">xxx供应商名称</span></td>
            <td style="width:320px"><span class="text">xxx供应商编码</span></td>
            <td style="width:320px"><span class="text">xxx产品服务依赖方</span></td>
            <td style="width:320px"><span class="text">已使用</span></td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,index) in tableData" :key="index">
            <td>{{index + 1}}</td>
            <td v-if="firstArr[index]>0" :rowspan="firstArr[index]">{{item.primaryClassification}}</td>
            <td v-if="secondArr[index]>0" :rowspan="secondArr[index]">{{item.secondaryClassification}}</td>
            <td>{{item.productName}}</td>
            <td>{{item.productCode}}</td>
            <td>{{item.supplierName}}</td>
            <td>{{item.supplierCode}}</td>
            <td>{{item.productServiceRelyingParty}}</td>
            <td>{{item.usedTimes}}</td>
        </tr>
    </tbody>
</table>
```

```js
mounted(){
    // 合并行
    let list = this.tableData
    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            this.firstArr.push(1);
            this.firstIndex = 0;
            this.secondArr.push(1);
            this.secondIndex = 0;
        } else {
        if (list[i].primaryClassification == list[i - 1].primaryClassification) {
            this.firstArr[this.firstIndex] += 1;
            this.firstArr.push(0);
        } else {
            this.firstArr.push(1);
            this.firstIndex = i;
        }
        // 第二列
        if (list[i].primaryClassification == list[i - 1].primaryClassification && list[i].secondaryClassification == list[i - 1].secondaryClassification) {
            this.secondArr[this.secondIndex] += 1;
            this.secondArr.push(0);
        } else {
            this.secondArr.push(1);
            this.secondIndex = i;
        }
        }
    }
},
```

