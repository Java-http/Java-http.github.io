---
title: 20-seajs模块化jQuery与jQuery插件
date: 2018-11-28 11:16:20
tags: 前端-03-jQuery
categories: 前端-03-jQuery
id : 1543374983235
---

> [csdn](https://blog.csdn.net/jscto/article/details/59167779 )
# 模块化jQuery
1、把jQuery修改成SeaJs的模块代码非常简单，就是用下面这段语句将jQuery源代码包裹起来：

```
define('jquery',[],function(require, exports, module){
    //这里放jQuery源代码
    module.exports = jQuery;
});
```

2、也可以加一个判断，如果define已经被定义，就把jQuery模块化，如果define没有被定义，正常执行jQuery代码：


```
(function(factory) {
    if (typeof define === 'function') {
        define('/jquery', [], factory);
    }
    else {
        factory();
    }
})(function(require) {
    //这里放jQuery源代码
    if (require) return $.noConflict(true);
});
```


3、如果你用的是jQuery1.7版本以上的，那就更方便了。可以看下jQuery源码的最后几行，你会发现类似下方的代码：

```
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
    define( "jquery", [], function () { return jQuery; } );
}
```

4、如果判断语句为真，那么jQuery就会自动模块化。所以改下判断语句，只留typeof define === "function"，jQuery便可以自动模块化：

```
if ( typeof define === "function") {
    define( "jquery", [], function () { return jQuery; } );
}
```

模块化后的调用代码如下：

```
seajs.config({
    'base':'/script',
    'alias':{
        'jquery':'jquery.sea.js'
    }
});

seajs.use(['jquery'],function($){
    console.log($);
});
```
# 模块化jQuery插件

模块化jQuery插件
1、普通插件

```
(function($){
    $.sayHello = function(){
        console.log("Hello");
    };
})(jQuery)
```


一般模块化代码像下面这样：


```
/*jquerySayHello.js*/
(function (factory) {
    if (typeof define === 'function') {
        // 如果define已被定义，模块化代码
        define('jquerySayHello',['jquery'], function(){
            // 返回构造函数
            return factory
        });
    } else {
        // 如果define没有被定义，正常执行插件代码
        factory(jQuery);
    }
}(function ($) {
    // 这里才是插件真正的构造函数
    console.log('init'); // 注意这行代码
    $.sayHello = function(){
        console.log("Hello");
    };
}));
```


使用插件的代码如下：


```
seajs.config({
    'base':'/script',
    'alias':{
        'jquery':'jquery.sea.js',
        'jquerySayHello':'jquery.sayHello.sea.js'
    }
});

seajs.use(['jquery','jquerySayHello'],function($,jquerySayHello){
    jquerySayHello($); // 初始化插件
    $.sayHello();
});

seajs.use(['jquery','jquerySayHello'],function($,jquerySayHello){
    jquerySayHello($); // 初始化插件
    $.sayHello();
});
```


注意我在插件构造函数里面写的console.log('init');这段代码，可以看到，如果我请求两次插件，插件就要初始化两次。这个虽然可以让代码只在使用时才执行，减少了资源消耗，但如果一个页面中多处需要这个插件的话，就要执行很多次。如果改成下面这种，直接在本模块里就执行： 
使用插件的代码如下：


```
(function (factory) {
    if (typeof define === 'function') {
    // 如果define已被定义，模块化代码
    define('jquerySayHello',['jquery'], function(require,exports,moudles){
        factory(require('jquery')); // 初始化插件
        return jQuery; // 返回jQuery
    });
} else {
    // 如果define没有被定义，正常执行jQuery
    factory(jQuery);
}
}(function ($) {
    console.log('init');
    $.sayHello = function(){
        console.log("Hello");
    };
}));
```


使用插件的代码如下


```
seajs.config({
    'base':'/script',
    'alias':{
        'jquery':'jquery.sea.js',
        'jquerySayHello':'jquery.sayHello.sea.js'
    }
});

seajs.use(['jquery','jquerySayHello'],function($){
    $.sayHello();
});

seajs.use(['jquery','jquerySayHello'],function($){
    $.sayHello();
});
```
