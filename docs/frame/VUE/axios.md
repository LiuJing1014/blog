---
title: 拦截器
date: 2020-09-04
tags:
 - VUE
---

当用户未登录时，在拦截器中根据用户是否登录，未登录则进行跳转到登录页面

```js
// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        // console.log(response)
        return response;
    },
    function (error) {
        // 判断登录状态为403则未登录  拦截所有接口
        if(error.response.status == 403){
            this.$message({
                type: 'warning',
                message: '请先登录！'
            }); 
            window.location.href='#/login'
        }
        // Do something with response error
        return Promise.reject(error);
    }
);
```

