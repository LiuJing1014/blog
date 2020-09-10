---
title: 微信小程序息屏导致中断socket连接
date: 2020-09-06
tags:
 - 微信小程序
---

**（1）息屏时直接退出连接，在onHide函数中退出**。

**（2）打开小程序就调用onShow函数，在此函数中重新连接socket，并且监听消息，判断当前页面是否为tabbar页面，是的话则显示红点**。

```js
onHide:function(){ //息屏直接退出连接
    let socket = this.globalData.socket
    socket.emit("offLine"); //断开连接
},
onShow:function(){ //打开屏幕进入连接
	let that = this
    if(that.globalData.userid){
    	let socket = io('wss://ldtzkj.cn') //登录成功之后连接socket
    	that.globalData.socket = socket
    	socket.emit("login",{
    		id:that.globalData.userid
    	}) //传递信息
    	socket.on("getMessage",function(data){ //监听事件，接收
            that.globalData.chatList.push(data)
            let list = that.globalData.chatList
            let pages = getCurrentPages()
            let currentPage = pages[pages.length- 1] //当前页面
            if(list[0] && (currentPage.route == 'pages/message/message' || 
                           currentPage.route == 'pages/index/index' || 
                           currentPage.route == 'pages/release/release' || 
                           currentPage.route == 'pages/user/user')){
                wx.showTabBarRedDot({
                    index: 2,
                })
            }
		})
		socket.on('getImage', function getImg(message) {
			that.globalData.chatList.push(message)
			let list = that.globalData.chatList
			let pages = getCurrentPages()
			let currentPage = pages[pages.length- 1] //当前页面
			if (list[0] && (currentPage.route == 'pages/message/message' || 
                            currentPage.route == 'pages/index/index' || 
                            currentPage.route == 'pages/release/release' || 
                            currentPage.route == 'pages/user/user')) {
				wx.showTabBarRedDot({
					index: 2,
				})
			}
		})
		socket.on('getComment',function(message){ //监听事件，接收
			let pages = getCurrentPages()
			let currentPage = pages[pages.length- 1] //当前页面
			if(message && (currentPage.route == 'pages/message/message' || 
                           currentPage.route == 'pages/index/index' || 
                           currentPage.route == 'pages/release/release' || 
                           currentPage.route == 'pages/user/user')){
				wx.showTabBarRedDot({
					index: 2,
				})
			}
		})
	}
}
```

