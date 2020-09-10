---
title: 接口联调时需要的数据类型
date: 2020-09-09
tags:
 - JS
---

```js
let urlConfigs = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
let urlConfig = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export const addName = (companyName) => {
    return axios.post("/api", name,urlConfigs)
}

export const upLoadFile = (data) => {
    return axios.post("/api",data,urlConfig)
}

//使用URLSearchParams传递参数 兼容性不足
const params = new URLSearchParams();
params.append('companyName', this.modalData.relyingPartyName)
addProductDependentParty(params).then(res=>{
    this.$message.success('添加成功！')
    this.$emit('updateList')
    this.$emit('handleClose')
    this.$refs[formName].resetFields();
},err=>{
    this.$message.error(err.response.data.message);
})


//上传文件
let fd = new FormData();
fd.append('file',list);//传文件
fd.append('code','');//传文件
fd.append('policy','');//传文件
fd.append('timeliness','');//传文件
upLoadFile(fd).then(function(res){
    console.log(res)
})
```

