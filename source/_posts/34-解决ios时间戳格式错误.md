---
title: 34-解决ios时间戳格式错误
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
[参考链接1](http://blog.csdn.net/weixin_35955795/article/details/71178643)

[参考链接2](http://blog.csdn.net/u013184759/article/details/51984080)

[参考链接3](http://blog.csdn.net/pkueecser/article/details/53140999)

To make your question easier your problem is with:

```
new Date('2014-02-18 15:00:48')
```

This work okay in chrome but not in safari. The mdn talks about ECMAScript 5 ISO-8601 format support says:


```
Alternatively, the date/time string may be in ISO 8601 format. For example, "2011-10-10" (just date) or "2011-10-10T14:48:00" (date and time) can be passed and parsed.
```

If you include T it works:


```
new Date('2014-02-18T15:00:48')
```

==You can use new
 Date('2014-02-18T15:00:48'.replace(/\s/, 'T')).==

If you handle a lot of cases like this I will recommend using moment which seems to handle this case very well with or without T: parsing from string. Additionally your whole example is easier with momentjs:


```
var minutes = moment().diff("2014-02-18 15:00:48", 'minutes');
```
