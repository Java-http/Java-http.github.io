---
title: 21-浮动对db和dib的影响
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1537686758725
---
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>demo</title>
    <style>
        *{margin: 0;padding: 0;}
        .box{
            width: 100%;
            height: 500px;
            box-sizing: border-box;
            border: 5px solid #000;
        }
        .left{
           width: 100px;
           height: 100px;
           background: red; 
           float: left;
        }
        .middle{
            width: 100%;
            height: 100px;
            background: blue;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="middle"></div>
    </div>
</body>
</html>
```
1. 当 .left 浮动时：
    - db按照原来一样的布局，但是文字会被挤压，不适合用于居中。
    - dib会被.left挤出来，当dib宽度不够另起一行，db不会。