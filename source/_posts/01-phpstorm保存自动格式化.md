---
title: 01-phpstorm保存自动格式化
date: 2019-06-15 18:14:56
tags: 后端-02-PhpStorm
categories: 后端-02-PhpStorm
id : 1560593699297
---

# 1 增加自定义格式化

格式化快捷键： 
`CMD + ALT + L`

配置等号对齐: 
1. `Setting` 
2. `Editor` 
3. `Code Style` 
4. `PHP`
5. `Wrapping and Braces` 
6. `勾选Align consecutive assignments`

配置key-value对齐: 
1. `Setting `
2. `Editor` 
3. `Code Style`
4. `PHP` 
5. `Other` 
6. 勾选`Align key-value pairs`


# 2 保存自动格式化

## 1 修改保存的默认快捷键CMD+S为“CMD+CTRL+Shift +S”

打开文件>设置,搜索“KEYMAP”并打开它；

搜索“Save All”并双击“Save All”；

修改快捷键为 “CMD+CTRL+Shift +S”。

## 2 选择Edit(编辑)->Macros(宏)->Start Macro Recording(开始录制宏)

快捷键键入 `cmd+alt+l`(格式化代码) 再键入 `CMD+CTRL+Shift +S`

ok,退出录制宏,保存为`Format And Save`

## 3 给录制宏加上cmd+s快捷键

在File->Settings(设置)->Keymap->Macros,找到刚才添加的“Format And Save”,右键点击“add keyboard shortcut”，录入快捷键“Ctrl+S”,点击"OK"。

> [参考链接](https://blog.csdn.net/koobee_1/article/details/85198009)

