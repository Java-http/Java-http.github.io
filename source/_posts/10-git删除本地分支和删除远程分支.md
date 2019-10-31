---
title: 10-git删除本地分支和删除远程分支
date: 2019-10-31 18:24:49
tags: 前端-10-git
categories: 前端-10-git
id : 1572517491549
---
具体操作：

我现在在dev20181018分支上，想删除dev20181018分支

1. 先切换到别的分支: `git checkout dev20180927`

2. 删除本地分支： `git branch -d dev20181018`

3. 如果删除不了可以强制删除，`git branch -D dev20181018`

4. 有必要的情况下，删除远程分支：`git push origin --delete dev20181018`

5. 在从公用的仓库fetch代码：`git fetch origin dev20181018:dev20181018`

6. 然后切换分支即可：`git checkout dev20181018`

> 注：上述操作是删除个人本地和个人远程分支，如果只删除个人本地，请忽略第4步