---
title: 05-nvm安装
date: 2018-09-23 15:45:45
categories: 前端-14-Mac
tags: 前端-14-Mac
id : 1537688264694
---
> [官网链接](https://github.com/creationix/nvm) [简书](https://www.jianshu.com/p/622ad36ee020)

# Install script

To install or update nvm, you can use the install script using cURL:


```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

or Wget:

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

**安装完成后关闭终端，重新打开终端输入 nvm 验证一下是否安装成功，当出现“Node Version Manager”时，说明已安装成功。**

# 全局npm包路径


```
/Users/wujingxiu/.nvm/versions/node/v10.10.0/lib
```

