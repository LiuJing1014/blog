---
title: 使用v-for循环遍历数组时，只循环其中一部分数值，使用slice方法
date: 2020-09-09
tags:
 - VUE
---

```html
<div class="latestContainer">
    <h1>最新音乐</h1>
    <div class="songList">
        <div class="list">
            <div class="songItem" v-for="(item,index) in result.slice(0,result.length / 2)" :key="index"  @click="startPlay(index)">
                <span class="textColor">{{index+1 | addZero}}</span>
                <div class="imgInfo">
                    <div class="imgs">
                        <img :src="item.picUrl"/>
                    </div>
                    <div class="tips">
                        <img src="../../assets/img/openSong.png"/>
                    </div>
                </div>
                <div class="nameInfo">
                    <span class="whiteColor">{{item.name}}</span>
                    <span class="textColors">{{item.song.artists | mergerName}}</span>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="songItem" v-for="(item,index) in result.slice(result.length / 2,result.length)" :key="index" @click="startPlay(index)">
                <span class="textColor">{{index+6 | addZero}}</span>
                <div class="imgInfo">
                    <div class="imgs">
                        <img :src="item.picUrl"/>
                    </div>
                    <div class="tips">
                        <img src="../../assets/img/openSong.png"/>
                    </div>
                </div>
                <div class="nameInfo">
                    <span class="whiteColor">{{item.name}}</span>
                    <span class="textColors">{{item.song.artists | mergerName}}</span>
                </div>
            </div>
        </div>
        
    </div>
</div>
```


