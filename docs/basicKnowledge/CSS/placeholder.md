---
title: 修改输入框placeholder的颜色
date: 2020-09-09
tags:
 - CSS
---

火狐浏览器中需要添加opacity:1
```css
input {
    &::placeholder {
        color: #fff;
    }
    &::-webkit-input-placeholder {
        /* WebKit browsers 适配谷歌 */
        color: #fff;
    }
    &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 适配火狐 */
        color: #fff !important;
        opacity: 1;
    }
    &::-moz-placeholder {
        /* Mozilla Firefox 19+ 适配火狐 */
        color: #fff !important;
        opacity: 1;
    }
    &:-ms-input-placeholder {
        /* Internet Explorer 10+  适配ie*/
        color: #fff;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
}
```

