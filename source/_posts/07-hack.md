---
title: 07-hack
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1537686254460
---
IE6 css hack:


```
1. *html Selector {} /* Selector 表示 css选择器 下同 */
2. Selector { _property: value; } /* property: value 表示 css 的属性名: 属性值 下同 */
3. Selector { _property/**/: /**/value; }
4. Selector { -property: value; } /*IE6 css hack常用习惯推荐使用下划线_ */
```

IE7 css hack:


```
1. *+html Selector {}
2. *:first-child+html Selector {}
```

IE8 css hack:


```
Selector { /* 注意看value值的 */
    property: value1; /* W3C MODEL */
    property: value2\0; /* IE 8+ */
    property: value1\9\0; /* IE 9+ */
}
```

IE6、IE7、IE8共有的css hack：

Selector { property: value\9; }
IE6、IE7共有的css hack：


```
1. Selector { *property: value; }
2. Selector { #property: value; }
3. Selector { +property: value; }
```

IE8+ css hack：


```
Selector { property: value\0; }
```

IE9+ css hack：


```
Selector { property: value\9\0; }
```

单独区分IE8 和IE9

 

`.Selector{margin-left:-2px\0}`【ie8和ie9均可识别\0】  
`:root .Selector{margin-left:0\9}`【只有ie9可识别:root】
 

判断方式：

```
<!–[if !IE]><!–> 除IE外都可识别 <!–<![endif]–>
<!–[if IE]> 所有的IE可识别 <![endif]–>
<!–[if IE 6]> 仅IE6可识别 <![endif]–>
<!–[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]–>
<!–[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]–>
<!–[if IE 7]> 仅IE7可识别 <![endif]–>
<!–[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]–>
<!–[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]–>
<!–[if IE 8]> 仅IE8可识别 <![endif]–>
<!–[if IE 9]> 仅IE9可识别 <![endif]–>
```
