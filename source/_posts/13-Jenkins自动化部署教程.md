---
title: 13-Jenkins自动化部署教程
date: 2018-11-28 11:19:26
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1543375168249
---
# Jenkins自动化部署教程

> 本教程使用Docker在服务器中运行Jenkins并实现从Github版本库的自动化部署，使得代码更新到Github版本库之后能够自动构建并发送到网站部署服务器。

## 准备工作

在部署之前你需要做以下准备：

1. 准备两台能连接至外部网络的服务器，一台作为Jenkins部署服务器，另一台作为网站部署服务器
2. 确认拥有服务器的root权限，或者在每行命令前加上sudo指令
3. 在部署服务器上安装Docker
4. 网站服务器上安装Docker和Nginx镜像*，并挂载好相应的路径存放网站文件
5. 注册一个Github账号
6. 本地存有你需要部署的源代码

> *关于Docker和Nginx的安装和使用，可以参照另一篇教程：http://note.youdao.com/noteshare?id=f32aee796b06882786e1149d2043da17

## 1 创建Github版本库

> 该部分需要有基础的Git知识

### 1.1 上传代码至版本库

登录到Github账户，新建一个repository，建议选择建立一个README文件。

填写完README文件后，点击Clone or download，将里面的HTTP链接复制下来保存好

在本地的计算机选择一个文件夹，使用相关的Git工具将新建的版本库克隆下来（应该只有一个README文件），url就是刚刚保存的链接。

将你的代码全部放进这个文件夹里，然后将更改commit并push到Github版本库。

这样你就有一个Github的版本库保存你的代码了。

### 1.2 设定Github钩子

拥有版本库之后，我们还需要设定一个钩子，这样每次更新代码后，就会自动触发Jenkins的工作。

在Github版本库的Settings中，点击Webhooks，然后点击Add Webhook添加一个钩子。

URL填写你准备部署Jenkins的服务器地址，格式为```http://$地址/github-webhook/```。

Content Type选择Json格式。

Secrets可以空着不填。

选择Just the push event（可以根据具体需求选择其他的触发动作）。

勾选Active。

点击确认即可成功设定Github钩子。

## 2 部署Jenkins

### 2.1 拉取并运行Jenkins镜像

> 记得让防火墙开放指定的端口，本教程使用的是8080

由于之前已经安装过Docker了，可以直接输入命令：

```
docker run \
  -u root \
  --rm \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v /root/jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  --name jenkins \
  jenkinsci/blueocean
```

这个命令会尝试开启容器运行本地的Jenkins镜像，如果没有找到，会从Docker Hub上下载该镜像再运行。

其中各参数包含的意义如下：

- ```-u```表示作为root用户运行
- ```--rm```表示让容器退出时自动清理容器内部的文件系统
- ```-d```表示让容器在后台运行
- ```-p```表示端口映射
- ```-v```表示将本地的文件挂载到容器内部
- ```--name```表示赋予容器的名字

可以用```docker ps```确认容器是否正常运行

### 2.2 发送密钥到网站部署服务器

> 这一步是为了之后在Jenkins传输文件时免去密码输入

> 若要发送文件到另一个服务器，需要在双方服务器安装openssh，由于几乎所有的Linux服务器都支持该功能，此处就不对安装过程多做介绍了。

使用```docker exec -it jenkins bash```进入容器当中，并建立```/root/.ssh/```路径。

使用```ssh-keygen -t rsa```指令建立密钥对，一直回车直至建立完成，默认会在```/root/.ssh/```路径下生成一个公钥文件和一个私钥文件。

使用```ssh-copy-id -i ~/.ssh/id_rsa.pub root@$ipaddress```将公钥发送到网站服务器，记得将IP地址填入，需要输入网站服务器的密码。

在网站服务器中保存好收到的公钥文件。

尝试用```ssh root@$ipaddress```连接到网站服务器，若不需要输入密码则为成功。

> 注意：以上步骤需要在容器内进行，否则只在容器外部发送密钥的话，到Jenkins运行时是无法得到密钥的。

> 可参考：https://www.cnblogs.com/K-artorias/p/7144904.html

### 2.3 对Jenkins进行配置

当容器在服务器正常运行后，打开浏览器访问服务器地址（记得加上映射的端口号），可以看到Jenkins运行的页面，显示解锁Jenkins。

在服务器内```/root/jenkins-data/secret/initialAdminPassword```文件内找到解锁码，在浏览器中输入解锁Jenkins。

选择安装推荐的插件，然后输入你自己的用户名和密码建立账户。

然后等待Jenkins启动完毕。

### 2.4 创建Jenkins工程

> 创建阶段基于中文版制作，英文版用户可自行翻译

Jenkins启动完毕后，点击新建任务，选择流水线工程，填写名称后点击确认建立新的流水线工程

在工程的配置页面，进行以下配置：

- 勾选GitHub Project，将Github版本的网址填进去
- 构建触发器处勾选Github hook trigger for GITScm polling
- 流水线处，定义选择Pipeline script from SCM
- 然后SCM选择Git，将之前保存的版本库链接填进URL的位置
- Branch一栏填写你想要使用的版本库分支（默认是master）
- 点击确认，工程就配置好了

### 2.5 编写Jenkinsfile

流水线工程需要在代码库中编写一个Jenkinsfile文件，然后会运行当中的脚本命令。

打开任意一个文本编辑器，将下面的代码填入：

```
pipeline {
    agent none
    stages {
	    stage('build') {
	        agent {
                docker {
            	    image 'node:9-alpine' 
            	    args '-p 3000:3000'
        	    }
    	    }
	        steps {
                sh 'npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/' 
		        sh 'npm install --registry=https://registry.npm.taobao.org' 
		        sh 'npm run build' 
	        }
	    }
	    stage('copy') {
	        agent any
	        steps {
		        sh 'scp -r /var/jenkins_home/workspace/demo/dist root@$ipaddress:/path-to-html-file/'
	        }
	    }
    } 
}
```

需要针对具体情况对路径、IP地址等作出改动。

下面解释该段代码含义：

- ```agent```表示下面部分的代码将在特定的环境下运行，每个流水线中agent都是必须存在的，其中```none```在最外边，使得里面的每个```stage```可以设置不同的环境，```any```表示不对环境做具体要求
- ```stage```表示不同的步骤，可以通过```agent```设置在不同的环境中运行
- ```docker```表示使用特定的Docker镜像，其中```image```表示镜像名称，```args```表示运行镜像的参数
- ```steps```表示按顺序执行一系列的指令
- ```sh```表示执行Linux系统的脚本指令
- ```scp```是基于SSH的远程文件传输指令，记得将IP地址填入

整段代码分为两个部分。第一部分在node镜像中执行，将源代码构建成网页代码。第二部分则将生成出来的网页代码发送到远程的网站部署服务器的指定路径当中。

> 关于更加详细的流水线语法，可以参考Jenkins的官方文档

将文件保存为Jenkinsfile（不要加任何的后缀名），并存放在代码库的根目录下。

将改动commit并push到Github上，然后会触发钩子自动将代码构建并将生成的代码自动发送到网站部署服务器。

若在网站服务器上正确安装和部署Docker和Nginx，并正确将外部文件挂载至容器内（包含发送生成代码的路径），在浏览器上访问网站服务器就能够看到之前做的改动啦！

---

这样以后只要将新代码推送到版本库，就可以在网站服务器看到改动的成果了。



