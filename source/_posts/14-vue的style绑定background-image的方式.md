---
title: 14-vue的style绑定background-image的方式
date: 2018-07-17 00:44:43
tags: 前端-08-vue
categories: 前端-08-vue
---

```
    <td class="video-msg" v-bind:id="item.videoid">
    	<div class="videoImg fl" v-bind:style="{backgroundImage:'url(' + item.videopic + ')'}">
    	</div>
    </td>
```
