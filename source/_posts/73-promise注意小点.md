---
title: 73-promise注意小点
date: 2019-03-28 08:47:44
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1546390195053
---
## 1.调用resolve或reject并不会终结 Promise 的参数函数的执行

> 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。


```
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```

上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。**所以，最好在它们前面加上return语句，这样就不会有意外。**


## 2.报错


```
window.onerror = handleError
function handleError(msg,url,l){
　　var txt="There was an error on this page.\n\n"
　　　　txt+="Error: " + msg + "\n"
　　　　txt+="URL: " + url + "\n"
　　　　txt+="Line: " + l + "\n\n"
　　　　txt+="Click OK to continue.\n\n"
      console.log(txt)
　　　　return false
} //如果返回值为 false，则在控制台 (JavaScript console) 中显示错误消息。反之则不会

// window.addEventListener('unhandledrejection', event => {
//   console.log("捕获到promise全局错误");
//   console.log(event)
// });

function a(){
  return new Promise((resolve,reject)=>{ 
    reject("呜呜")
  }) 
}
function b(){
  return new Promise((resolve,reject)=>{ 
    resolve("哈哈")
  }) 
}

async function c(){
  const r1= await a().catch(err=>{throw err});
  const r2= await b();
}

c()

```

**在Promise报错(无论reject还是throw)都会被`window.addEventListener('unhandledrejection', event => {}`接收到，`window.onerror`监听不到**

**`window.onerror`只能捕获全局异常**

> - [csdn](https://blog.csdn.net/fundebug/article/details/78212439)
> - [如何优雅处理前端异常？](https://zhuanlan.zhihu.com/p/51800345)

## 3. 中断或取消Promise链的可行方案

当新对象保持“pending”状态时，原Promise链将会中止执行。

```
Promise.resolve()
    .then(() => {
        console.log('[onFulfilled_1]');
        return new Promise(()=>{}); // 返回“pending”状态的Promise对象
    })
    .then(() => {                   // 后续的函数不会被调用
        console.log('[onFulfilled_2]');
    })
    .catch(err => {
        console.log('[catch]', err);
    });
// => [onFulfilled_1]
```
## 4 面试题相关

```
console.log(1)

setTimeout(function() {
    console.log(2)
    
    new Promise(function(resolve) {
        console.log(3)
        resolve(4)
    }).then(function(num) {
        console.log(num)
    })
}, 300)

new Promise(function(resolve) {
    console.log(5)
    resolve(6)
}).then(function(num) {
    console.log(num)
})

setTimeout(function() {
    console.log(7)
}, 400)
```
