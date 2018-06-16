---
title: 07-prototype
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
#### Js中Prototype、__proto__、Constructor、Object、Function关系介绍
#### 一    Prototype、__proto__与Object、Function关系介绍
-   Function、Object：Js自带的函数对象。
-   prototype,每一个函数对象都有一个显示的prototype属性,它代表了对象的原型(Function.prototype函数对象是个例外，没有prototype属性)。
-   __proto__:每个对象都有一个名为__proto__的内部隐藏属性，指向于它所对应的原型对象(chrome、firefox中名称为__proto__，并且可以被访问到)。原型链正是基于__proto__才得以形成(note：不是基于函数对象的属性prototype)。  
   
关于上面提到的函数对象，我们来看以下例子，来说明：

```

        var o1 = {};
        var o2 =new Object();
        
        function f1(){}
        var f2 = function(){}
        var f3 = new Function('str','console.log(str)');
    
        f3('aabb');   // aabb
        console.log('typeof Object:'+typeof Object);            //function
        console.log('typeof Function:'+typeof Function);        //function
        console.log('typeof o1:'+typeof o1);   //object
        console.log('typeof o2:'+typeof o2);   //object
        console.log('typeof f1:'+typeof f1);   //function
        console.log('typeof f2:'+typeof f2);   //function
        console.log('typeof f3:'+typeof f3);   //function
```
- 通常我们认为o1、o2是对象，即普通对象；f1、f2、f3为函数。
- 但是其实函数也是对象，是由Function构造的，
- f3这种写法就跟对象的创建的写法一样。f1、f2最终也都像f3一样是有Function这个函数构造出来的
- f1、f2、f3为函数对象，Function跟Object本身也是函数对象。
 
Js中每个对象(null除外)都和另一个对象相关联，通过以下例子跟内存效果图来分析Function、Object、Prototype、__proto__对象间的关系。

```
    function Animal(){
        
    }
    var  anim = new Animal();
    
    console.log('***********Animal anim proto*****************');
    console.log('typeof Animal.prototype:' +typeof Animal.prototype);  //object 
    console.log('anim.__proto__===Animal.prototype:'+(anim.__proto__===Animal.prototype));  //true
    console.log('Animal.__proto__===Function.prototype:'+(Animal.__proto__===Function.prototype));  //true
    console.log('Animal.prototype.__proto__===Object.prototype:'+(Animal.prototype.__proto__===Object.prototype));  //true
    
    console.log('***********Function proto*****************');
    console.log('typeof Function.prototype:'+typeof Function.prototype);  //function
    console.log('typeof Function.__proto__:'+typeof Function.__proto__);  //function
    console.log('typeof Function.prototype.prototype:'+typeof Function.prototype.prototype); //undefined
    console.log('typeof Function.prototype.__proto__:'+typeof Function.prototype.__proto__);   //object
    console.log('Function.prototype===Function.__proto__:'+(Function.prototype===Function.__proto__)); //true

    console.log('***********Object proto*****************');
    console.log('typeof Object.prototype:'+typeof Object.prototype);  //object
    console.log('typeof Object.__proto__:'+typeof Object.__proto__);  //function
    console.log('Object.prototype.prototype:'+Object.prototype.prototype);  //undefied
    console.log('Object.prototype.__proto__===null:'+(Object.prototype.__proto__===null));  //null

    console.log('***********Function Object  proto关系*****************');
    console.log('Function.prototype===Object.__proto__:'+(Function.prototype===Object.__proto__));   //true
    console.log('Function.__proto__===Object.__proto__:'+(Function.__proto__===Object.__proto__));   //true
    console.log('Function.prototype.__proto__===Object.prototype:'+(Function.prototype.__proto__===Object.prototype));   //true

    /********************* 系统定义的对象Array、Date ****************************/
    console.log('**************test Array、Date****************');      
    var array = new Array();
    var date = new Date();
    console.log('array.__proto__===Array.prototype:'+(array.__proto__===Array.prototype));   //true
    console.log('Array.__proto__===Function.prototype:'+(Array.__proto__===Function.prototype));  //true
    console.log('date.__proto__===Date.prototype:'+(date.__proto__===Date.prototype));    //true
    console.log('Date.__proto__===Function.prototype:'+(Date.__proto__===Function.prototype));     //true
```
![image](http://www.blogjava.net/images/blogjava_net/heavensay/web-front/8164530.png)
![image](http://www.blogjava.net/images/blogjava_net/heavensay/web-front/35166462.png)

##### 通过上图Function、Object、Prototype关系图中，可以得出一下几点：
- 所有对象所有对象，包括函数对象的原型链最终都指向了Object.prototype，而Object.prototype.__proto__===null，原型链至此结束。
- Animal.prototype是一个普通对象。
- Object是一个函数对象，也是Function构造的，Object.prototype是一个普通对象。
- Object.prototype.__type__指向null。
- Function.prototype是一个函数对象，前面说函数对象都有一个显示的prototype属性，但是Function.prototype却没有prototype属性，即Function.prototype.prototype===undefined，所有Function.prototype函数对象是一个特例，没有prototype属性。
- Object虽是Function构造的一个函数对象，但是Object.prototype没有指向Function.prototype，即Object.prototype!==Function.prototype。


---

#### 二  Prototype跟Constructor关系介绍
在 JavaScript 中，每个函数对象都有名为“prototype”的属性(上面提到过Function.prototype函数对象是个例外，没有prototype属性)，用于引用原型对象。此原型对象又有名为“constructor”的属性，它反过来引用函数本身。这是一种循环引用（i.e.Animal.prototype.constructor===Animal）。  

通过以下例子跟内存效果图来分析Prototype、constructor间的关系。

```
  console.log('**************constructor****************'); 

    console.log('anim.constructor===Animal:'+(anim.constructor===Animal))    ;    //true
    console.log('Animal===Animal.prototype.constructor:'+(Animal===Animal.prototype.constructor))    ;    //true
    console.log('Animal.constructor===Function.prototype.constructor:'+(Animal.constructor===Function.prototype.constructor));   //true
    console.log('Function.prototype.constructor===Function:'+(Function.prototype.constructor===Function));    //true
    console.log('Function.constructor===Function.prototype.constructor:'+(Function.constructor===Function.prototype.constructor));    //true

    console.log('Object.prototype.constructor===Object:'+(Object.prototype.constructor===Object));    //true
    console.log('Object.constructor====Function:'+(Object.constructor===Function));    //true
```
![image](http://www.blogjava.net/images/blogjava_net/heavensay/web-front/8199006.png)
- 注意Object.constructor===Function；本身Object就是Function函数构造出来的        
- 如何查找一个对象的constructor，就是在该对象的原型链上寻找碰到的第一个constructor属性所指向的对象。