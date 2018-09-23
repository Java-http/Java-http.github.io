---
title: 02-Ruby安装的坑
date: 2018-05-03 10:57:37
tags: 前端-07-scss
categories: 前端-07-scss
id : 1537685585975
---
## SASS与Compass的安装

SASS在Windows操作系统内依赖于Ruby环境，因此在安装SASS之前：

1、需要先安装Ruby。Ruby现阶段的安装与一般应用程序安装没有太大区别，环境变量等由安装程序自行设置。

2、Ruby环境内有个包管理器——GEM，它类似于Nodejs下的NPM，它随着Ruby一起被安装，因此不需要额外安装。

3、换[RubyGems 镜像- Ruby China像](http://gems.ruby-china.org/)

请尽可能用比较新的 RubyGems 版本，建议 2.6.x 以上。
```
$ gem update --system # 这里请翻墙一下
$ gem -v
2.6.3
```


```
$ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
$ gem sources -l
https://gems.ruby-china.org
# 确保只有 gems.ruby-china.org
```
> 如果遇到 SSL 证书问题，你又无法解决，请直接用 http://gems.ruby-china.org 避免 SSL 的问题。

4、请注意，务必先安装SASS，再安装Compass，并且后者对前者版本存在依赖，如果你安装的SASS不是Compass要求的版本，会导致Compass安装不成功。

5、scss更新

```
gem update sass

```
6、scss卸载
```
gem uninstall sass
```



**参考:**

http://blog.csdn.net/bluefish1990/article/details/21093349