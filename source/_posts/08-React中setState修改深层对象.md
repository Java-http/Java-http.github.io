---
title: 08-React中setState修改深层对象
date: 2019-03-27 11:46:53
tags: 前端-05-react
categories: 前端-05-react
id : 1553658406963
---

## 方案一(作用于对象中的深层级和第一层级):


```
  this.setState({
     list: {
         ...this.state.list,
          objA: {
             ...this.state.list.objA,
                  name: 'A1'
                }
              }
            })
    }
```
## 方案二(作用对象中的第一层级):

```
let data = Object.assign({}, this.state.list, {objD: 'D1'})
this.setState({
          list: data
})
```
## 方案三(作用于对象中的深层级和第一层级):

```
  let data = this.state.list;
  data.objA.name = 'A1';
  data.objD = 'D1';
  this.setState({
          list: data
  })
```
