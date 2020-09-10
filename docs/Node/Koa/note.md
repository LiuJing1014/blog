---
title: 使用koa-multer上传头像
date: 2020-09-05
tags:
 - Koa
---

前端代码：

```html
<el-upload class="avatar-uploader" 
           action="http://localhost:5000/uploadImg" 
		   :show-file-list="false" 
           list-type="picture" 
           :on-success="handleAvatarSuccess">   
 	<img v-if="avatar" :src="avatar" class="avatar">   
    <i v-else class="el-icon-plus avatar-uploader-icon">
</i></el-upload>
```

后端代码：

```js
const multer = require('koa-multer')

//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
         //以点分割成数组，数组的最后一项就是后缀名
        var fileFormat = (file.originalname).split("."); 
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
var upload = multer({ storage: storage });

router.post('/uploadImg',upload.single('file'),async (ctx) => {
    console.log(ctx.req.file)
    ctx.body = {
        //返回文件名
        filename: 'http://localhost:5000/upload/'+ ctx.req.file.filename
    }
})
```

