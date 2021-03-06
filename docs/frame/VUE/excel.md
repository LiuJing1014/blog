---
title: vue中导出excel表格
date: 2020-09-09
tags:
 - VUE
---
- 在vue组件中，需要先安装xlsx和file-saver，使用命令如下：

  ```js
  npm install xlsx --save
  npm install file-saver --save
  ```

- 在.vue 模板中代码如下

  ```html
  <template>
      <div id="app" >
          <button @click="downloadExl">导出</button>
          <div id="tableId">
          <table class="table table-bordered" style="min-width: 100%;">
              <thead>
                  <tr>
                      <th>#</th>
                      <th v-for="(item,index) in Object.keys(jsonData[0])" :key="index">{{item}}</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(row,index) in jsonData" :key="index">
                      <th scope="row">{{index}}</th>
                      <td v-for="col in Object.keys(jsonData[0])">{{(row)[col]}}</td>
                  </tr>
              </tbody>
          </table>
          </div>
      </div>
  </template>
  ```
  
    
  
  ```js
  <script>
      var XLSX = require('xlsx')
      var FileSaver = require('file-saver')
      export default {
          data() {
              return {
                  jsonData: [{
                      "姓名": "小杨",
                      "联系电话": "021-33800544",
                      "家庭地址": "浦东新区XXXXXXXX"
                  }]
              }
          },
          methods: {
              downloadExl() {
                  let wb = XLSX.utils.table_to_book(document.getElementById('tableId')),
                  wopts = {
                      bookType: 'xlsx',
                      bookSST: false,
                      type: 'binary'
                  },
                  wbout = XLSX.write(wb, wopts);
                  
                  FileSaver.saveAs(new Blob([this.s2ab(wbout)], {
                      type: "application/octet-stream;charset=utf-8"
                  }), "个人简介表.xlsx");
              },
              s2ab(s) {
                  if (typeof ArrayBuffer !== 'undefind') {
                      var buf = new ArrayBuffer(s.length);
                      var view = new Uint8Array(buf);
                      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                      return buf;
                  } else {
                      var buf = new Array(s.length);
                      for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                      return buf;
                  }
              }
          }
      }
  </script>
  ```
  
  

