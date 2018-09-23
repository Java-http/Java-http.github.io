---
title: 03-安装oh-my-zsh
date: 2018-09-14 14:26:35
categories: 前端-14-Mac
tags: 前端-14-Mac
id : 1537685971763
---

> [github地址](https://github.com/robbyrussell/oh-my-zsh)

## 1.使用zsh
Mac系统默认使用dash作为终端，可以使用命令修改默认使用zsh：

```
chsh -s /bin/zsh
```

如果想修改回默认dash，同样使用chsh命令即可：


```
chsh -s /bin/bash
```

## 2.安装 oh-my-zsh


```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
> [安装字体](https://github.com/powerline/fonts)

## 3.修改主题


```
vi ~/.zshrc
```

```
ZSH_THEME="robbyrussell"
```

> [主题列表](https://github.com/robbyrussell/oh-my-zsh/wiki/themes)