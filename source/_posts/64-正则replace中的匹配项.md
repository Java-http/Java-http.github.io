---
title: 64-正则replace中的匹配项
date: 2018-07-06 16:02:39
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---

```
stringObject.replace(regexp/substr,replacement)
```
replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。


字符 | 	替换文本
---|---
$1、$2、...、$99 | 	与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
$& | 	与 regexp 相匹配的子串。
$` | 	位于匹配子串左侧的文本。
$' | 	位于匹配子串右侧的文本。
$$ | 	直接量符号。