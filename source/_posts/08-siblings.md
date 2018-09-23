---
title: 08-siblings
date: 2018-05-03 09:31:35
categories: 前端-03-jQuery
tags: 前端-03-jQuery
id : 1537686304090
---
## jQuery( "prev ~ siblings" )

prev: 任何有效的选择器

siblings: 一个选择器来过滤第一选择器以后的兄弟元素。

(prev + next) 和 (prev ~ siblings)之间最值得注意的不同点是他们各自的可及之范围。前者只达到紧随的同级元素，后者扩展了该达到跟随其的所有同级元素。

==不含自己==

## .nextAll( [selector ] )
考虑一个页面上一个简单的列表：


```
<ul>
   <li>list item 1</li>
   <li>list item 2</li>
   <li class="third-item">list item 3</li>
   <li>list item 4</li>
   <li>list item 5</li>
</ul>
```

如果我们从第三个项目开始，我们可以找到它之后的元素：



```
$('li.third-item').nextAll().css('background-color', 'red');
```

执行后的结果是列表项 4 和 5 变成红色背景。 由于我们没有提供一个选择器表达式，因此这两个元素很明确的成为了结果对象中的一部分。如果我们有提供一个选择的表达式，那么在包含在结果对象之前，会先测试该元素是否满足匹配的选择器表达式。

## .prevAll( [selector ] )

## closet和parents
.closest()|.parents()
--|--
开始于当前元素	|开始于父元素
在 DOM 树中向上遍历，直到找到与提供的选择器相匹配的元素|	向上遍历DOM树到文档的根元素，每个祖先元素加入到临时集合，如果提供一个选择器，则会使用该选择器在集合中进行过滤
返回包含零个或一个元素的jQuery对象|	返回包含零个，一个或多个元素的jQuery对象