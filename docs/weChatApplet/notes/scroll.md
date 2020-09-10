---
title: 随着屏幕滚动固定导航栏
date: 2020-09-06
tags:
 - 微信小程序
---

<p style="color:red">（在onShow函数中监听组件距离顶部的距离，再更改样式）</p>

- **topHeight：距离顶部的距离**
- **topNum：滚动的距离**

```html
<!-- 分区导航栏 -->
<view class="{{topNum > topHeight ? 'fixedTop' :'con-nav'}}" id="the-id">
    <view class='{{num==1?"texthover":"con-nav-list"}}' data-num='1' bindtap="getInfoNew">最新信息</view>
    <view class='{{num==2?"texthover":"con-nav-list"}}' data-num='2' bindtap='getInfoFree'>免费专区</view>
    <view class='{{num==3?"texthover":"con-nav-list"}}' data-num='3' bindtap='getInfoCharity'>慈善捐赠</view>
</view>
```

```js
wx.createSelectorQuery().select('#the-id').boundingClientRect(function (rect) {
	that.setData({
		topHeight:rect.top
	})
}).exec()
```

```js
//屏幕滚动
onPageScroll:function(e){
    //控制回到顶部的显示
    if(e.scrollTop > 100){
        this.setData({
            floorStatus:true
        })
    }else{
        this.setData({
            floorStatus:false
        })
    }
    this.setData({
        topNum:e.scrollTop
    })
},
```

