---
title: vue中的transition组件（组件的过渡）
date: 2020-09-09
tags:
 - Element-ui
---

**使用transition完成任何元素进入/离开的过渡组件需要满足下列条件**

- 条件渲染（v-if）

- 条件展示（v-show）

- 动态组件

- 组件根节点

  ```html
  <div id="demo">
      <button v-on:click="show = !show">
      	Toggle
      </button>
      <transition name="fade">
      	<p v-if="show">hello</p>
      </transition>
  </div>
  ```

  ```js
  new Vue({
      el: '#demo',
      data: {
      	show: true
      }
  })
  ```

  ```css
  .fade-enter-active, .fade-leave-active {
  	transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
  	opacity: 0
  }
  ```

- **transition** 中只有name属性，不可添加其他标签属性 **transition** 中只能有一个子元素并且该子元素需要有v-show或者v-if来控制是否显示

- 过渡CSS类名

- **transition** 中的name属性用于 替换 vue钩子函数中的类名**v-**

  v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

  v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在transition/animation完成之后移除。

  v-leave:定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

  v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation完成之后移除。