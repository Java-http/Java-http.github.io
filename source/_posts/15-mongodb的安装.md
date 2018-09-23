---
title: 15-mongodb的安装
date: 2018-05-03 10:28:37
tags: 前端-00-基础
categories: 前端-00-基础
id : 1537686613301
---
> [知乎](https://zhuanlan.zhihu.com/p/24926260)

1. 官网下载好后，配置环境变量

2. 接下来是配置mongodb数据库的数据文件和日志文件了，我们要手动为mongodb创建数据文件和日志文件，这两个文件可以放在任何地方，首先我在D盘下创建mongodb文件夹，然后在mongodb文件夹下创建data文件夹，然后在data文件夹下创建db和log文件夹，db就是mongodb用来存放数据的地方，log自然是用来存放日志文件的地方，最后在log下创建MongoDB.log文件

3. 输入mongod -dbpath "D:\mongodb\data\db"

4. 然后关闭改控制台，再次打开控制台，进入到mongodb的bin目录下，C:\Program Files\MongoDB\Server\3.2\bin，输入mongod -dbpath "D:\mongodb\data\db" -logpath "D:\mongodb\data\log\MongoDB.log" -install -serviceName "MongoDB" 这样做的目的是让mongodb作为windows服务启动，这样就不需要每次在重新启动mongodb服务了。

5. 输入net start mongodb，mongodb的服务被启动
6. 注意的是CMD必须要在管理员权限下