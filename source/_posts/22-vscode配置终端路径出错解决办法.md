---
title: 22-vscode配置终端路径出错解决办法
date: 2018-11-28 11:47:14
tags: 前端-00-基础
categories: 前端-00-基础
id : 1543376836548
---
# 1.svn插件安装

> [svn插件地址](https://marketplace.visualstudio.com/items?itemName=johnstoncode.svn-scm#review-details)

Windows

If you use TortoiseSVN, make sure the option Command Line Tools is checked during installation and C:\Program Files\TortoiseSVN\bin is available in PATH.

安装前要检查一下 `TortoiseSVN` bin目录下是否有 `svn.exe`，默认安装是没有的，需要重新安装一次，配置`Command Line Tools` 安装到本地。

# 2.配置终端路径出错解决办法

由于刚安装svn插件时，终端提示我没有找到svn路径，我随便加了个tortoiseproc.exe,导致终端每次打开默认记住了这个路径。

修改办法：

先修改一下 `svn.exe` 还有 `tortoiseproc.exe` 文件名，让终端再次打开的时候找不到路径弹出提示，然后我们再重命名回文件名，在终端搜索正确路径即可。