---
title: 17-CentOS7 安装 Jenkins
date: 2019-08-31 16:16:51
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1567239414120
---

## 1 准备工作

### 1.1 安装docker

1、使用 sudo 或 root 权限登录 Centos。

2、确保 yum 包更新到最新。

```
sudo yum update
```
3、安装一些必要的系统工具：

```
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```
4、添加软件源信息(设置稳定的存储库信息)：

```
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
5、更新 yum 缓存：

```
sudo yum makecache fast
```
6、安装 Docker-ce：

```
sudo yum -y install docker-ce
```
7、启动 Docker 后台服务

```
sudo systemctl start docker
```

### 1.2 yum安装jdk8

1、查看yum源中是否有相关套件

```
yum -y list java*
```
![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/C0B2343F83374FA5A7C337DD551FB8E8/14680](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/C0B2343F83374FA5A7C337DD551FB8E8/14680)

2、这里我们选择`java-1.8.0-openjdk-devel.x86_64`

```
yum -y install java-1.8.0-openjdk-devel.x86_64
```
3、修改 `/etc/profile`

在文件最后输入
```
# JAVA
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64
JRE_HOME=$JAVA_HOME/jre
PATH=$PATH:$JAVA_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JAVA_HOME
export JRE_HOME
export PATH
export CLASSPATH
```
![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/E22D7DCD3ADA4509919DCAB1CAD87984/14689](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/E22D7DCD3ADA4509919DCAB1CAD87984/14689)

> 图中圆圈目录可能不一致,具体请看电脑安装目录

4、更新环境变量

```
source /etc/profile
```
## 2 安装Jenkins

### 2.1 Docker安装

```
docker run \
  -u root \
  --name jenkins \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v /var/jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```
- `-d`表示在后台运行容器（即“分离”模式）并输出容器ID  
- `-v /var/jenkins-data:/var/jenkins_home` 
  表示映射容器中的`/var/jenkins_home` 目录到`/var/jenkins-data` 的volume,这样,我们就可以不用进入`docker`容器里面查看`jenkins_home`目录,直接在本机`/var/jenkins-data`查看该目录下的文件即可
- `--name jenkins`将容器命名`jenkins`,方便后面操作容器

启动完成后面请看-> 第三步操作 安装向导

### 2.2 其他操作

#### 访问Jenkins / Blue Ocean Docker容器

```
docker exec -it jenkins bash
```
> 这里的`jenkins`就是上面`--name jenkins`的设置命名

#### 通过Docker日志访问Jenkins控制台日志

```
docker logs <docker-container-name>
```

## 3 安装向导

### 3.1 解锁 Jenkins

浏览 `http://服务器ip:8080` 

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/CC3383824BAF4C9A9DE222275305BFDB/14767](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/CC3383824BAF4C9A9DE222275305BFDB/14767)

然后到命令窗口打印出log信息并复制密码

```
docker logs jenkins
```
![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/CDF9CFEC6ECA48B9AF5E3BA84CA11FBF/14774](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/CDF9CFEC6ECA48B9AF5E3BA84CA11FBF/14774)

在 **解锁Jenkins** 页面, 粘贴该密码到 **管理员密码****输入框并点击 **继续**

### 3.2 安装插件

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/4472B62AA72D4252A86C594B15DD0698/14788](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/4472B62AA72D4252A86C594B15DD0698/14788)

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/E207FF95AE3F4557AFED3CBB94A8B547/14792](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/E207FF95AE3F4557AFED3CBB94A8B547/14792)

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/0F3348EAE06B4DF2814AC311E22FB7B1/14800](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/0F3348EAE06B4DF2814AC311E22FB7B1/14800)

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/1F1A381E1C3C4760BF4974C731155DC7/14807](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/1F1A381E1C3C4760BF4974C731155DC7/14807)

## 4 Coding新建个node项目

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/EB5EFCD8E79C43FFBE699F72F862CACA/14817](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/EB5EFCD8E79C43FFBE699F72F862CACA/14817)
![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/AAE394A5A5014DEA881AD9C9EA46A225/14893](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/AAE394A5A5014DEA881AD9C9EA46A225/14893)

Jenkinsfile
```
pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('yarn') { 
            steps {
                sh 'npm i -g yarn' 
            }
        }
        stage('taro') { 
            steps {
                sh 'yarn global add @tarojs/cli@1.3.14' 
            }
        }
        stage('install') { 
            steps {
                sh 'yarn' 
            }
        }
        stage('build') { 
            steps {
                sh 'npm run build:h5' 
            }
        }
    }
}
```

## 5 在Jenkins中创建流水线项目

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/6D73387FC18746A4B483AD433A39A20C/14828](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/6D73387FC18746A4B483AD433A39A20C/14828)

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/4DAEFC03CE6549B08D26D4E9908A9CC7/14831](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/4DAEFC03CE6549B08D26D4E9908A9CC7/14831)

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/384E51CBC6BC4D6DAD91FC71AC4925FC/14835](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/384E51CBC6BC4D6DAD91FC71AC4925FC/14835)

> 轮询SCM：只要SVN或Git中数据有更新，则执行构建任务  
>  
> 构建语法说明：
> 
> 1. 首先格式为：`* * * * *`（五个星）；
> 2. 第一个`*`表示分钟，取值`0~59 `   
   第二个`*`表示小时，取值`0~23 `   
   第三个`*`表示一个月的第几天，取值`1~31`  
   第四个`*`表示第几月，取值`1~12`  
   第五个`*`表示一周中的第几天，取值`0~7`，其中`0`和`7`代表的都是周日  

###  流水线选项

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/6C33A4AB86B74ACAA7EA10C37F8C5581/14878](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/6C33A4AB86B74ACAA7EA10C37F8C5581/14878)

1. 在**定义**，选择 `Pipeline script from SCM` 选项。此选项指示`Jenkins`从源代码管理（SCM）仓库获取你的流水线， 这里的仓库就是你clone到本地的Git仓库
2. 在 `SCM` 域中，选择 `Git`
3. 在 `Repository URL` 域中，填写你本地仓库的 目录路径
4. 增加一个全局凭证

    全局凭证这里你可以通过密码登录,也可以通过`ssh`登录,这里我选择`ssh`,git仓库ssh设置就不在这里赘述了

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/FF0BD3379B184032885812853983DBD4/14874](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/FF0BD3379B184032885812853983DBD4/14874)

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/BCEB060A102D4111A3D74625B88F8BF8/14876](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/BCEB060A102D4111A3D74625B88F8BF8/14876)

### 最后保存

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/8CC4A881FBE44BF18927BBA5510DA50D/14887](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/8CC4A881FBE44BF18927BBA5510DA50D/14887)

## 6 查看效果

![https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/0FF63A247671451CAD15BD3752CAC2C6/14896](https://note.youdao.com/yws/public/resource/10af346fc09385ed240d403979698515/xmlnote/0FF63A247671451CAD15BD3752CAC2C6/14896)

总体操作下来还是比较顺利的,网上也有很多类似的文章.生成 `dist`目录后,其实还需要运行`scp`命令发送到另外一台服务器部署,有兴趣大家可以去了解下.

> [菜鸟教程-Docker安装](https://www.runoob.com/docker/centos-docker-install.html)  
> [Docker官网-安装](https://docs.docker.com/install/linux/docker-ce/centos/)  
> [博客园-jdk安装](https://www.cnblogs.com/ryanlamp/p/9687741.html)  
> [jenkins官网-安装node项目](https://jenkins.io/zh/doc/tutorials/build-a-node-js-and-react-app-with-npm/)