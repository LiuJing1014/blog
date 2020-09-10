---
title: async函数
date: 2020-09-01
tags:
 - ES6
---


async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。await 关键字仅在 async function 中有效

<p style="color:red">await针对所跟不同表达式的处理方式：</p>

- Promise 对象：await 会暂停执行，等待 Promise 对象 resolve，然后恢复 async 函数的执行并返回解析值。     

- 非 Promise 对象：直接返回对应的值。

  ```js
  function testAwait(){ 
  	console.log("testAwait"); 
  } 
  async function helloAsync(){ 
      await testAwait();
      console.log("helloAsync"); 
  } 
  helloAsync(); 
  // testAwait 
  // helloAsync
  ```

  ```js
  async initData(){
  	try{
  		const result = await getCategory(this.restaurant_id);
  		if (result.status == 1) {
  			result.category_list.map((item, index) => {
  				item.value = index;
  				item.label = item.name;
  			})
  			this.categoryForm.categoryList = result.category_list;
  		}else{
  			console.log(result)
  		}
  	}catch(err){
  		console.log(err)
  	}
  },
  ```

  