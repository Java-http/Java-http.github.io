---
title: 06-win10搭建react-native
date: 2018-05-03 10:28:37
tags: 前端-05-react
categories: 前端-05-react
---
> [官网链接](http://facebook.github.io/react-native/docs/getting-started.html) [stackoverflow](https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows)
建议：结合官网文档（比较详细），准备科学上网软件


## 1 安装相应软件

> 需要==Node==，==React Native==命令行界面，==Python2.7==，==JDK1.8==和==Android Studio==

- node 官网下载即可，版本8.9.3
    -  需要常用npm包:==yarn== ==react-native-cli== 
    
```
npm install -g react-native-cli yarn
```

- python2.7
- JDK1.8 (可以下脱机版，配置下JAVA_HOME环境变量)
- 安装Android Studio
  - 下载并安装Android（建议不要装在C盘，占内存太大） Studio。提示您选择安装类型时，请选择“自定义”设置。确保选中以下所有项旁边的框：
```
Android SDK
Android SDK Platform
Performance (Intel ® HAXM)
Android Virtual Device
```
安装完成后在SDK Manager里安装
```
Google APIs
Android SDK Platform 23
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom_64 System Image
```
"Android SDK Build-Tools" 选择 23.0.1 

配置ANDROID_HOME环境变量

![image](http://facebook.github.io/react-native/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

## 2 创建一个新的应用程序

在文件夹里（随便的）右键 git bash 

```
react-native init AwesomeProject
```
### ==有个坑来了！==

如果您使用Windows，请按以下方式运行命令，或者如果出现错误“无法找到条目文件index.android.js”

```
mkdir android\app\src\main\assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

```

## 3 Android Studio打开Android项目

`react-native init AwesomeProject`生成一个react-native项目，有一个android文件夹，用Android Studio打开。

配置下adb环境变量。

![image](https://note.youdao.com/yws/api/personal/file/3C0D6D7DA5E44C9AB3B0ABD918F292F4?method=download&shareKey=20cf355feead66d299c2ac18db25b17a)

到这里应该结束了，一个正常可用的安卓项目生成完成！


---
分割线：

学习react-native之前，需要先了解原生js，es6，react.js，基本的node.js下载命令。





