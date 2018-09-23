---
title: 15-sass的控制命令
date: 2018-05-03 10:57:37
tags: 前端-07-scss
categories: 前端-07-scss
id : 1537686617066
---
## @if 指令
@if 指令是一个 SassScript，它可以根据条件来处理样式块，如果条件为 true 返回一个样式块，反之 false 返回另一个样式块。在 Sass 中除了 @if 之，还可以配合 @else if 和 @else 一起使用。

假设要控制一个元素隐藏或显示，我们就可以定义一个混合宏，通过 @if...@else... 来判断传进参数的值来控制 display 的值。如下所示：

```
//SCSS
@mixin blockOrHidden($boolean:true) {
  @if $boolean {
      @debug "$boolean is #{$boolean}";
      display: block;
    }
  @else {
      @debug "$boolean is #{$boolean}";
      display: none;
    }
}

.block {
  @include blockOrHidden;
}

.hidden{
  @include blockOrHidden(false);
}
```

编译出来的CSS:

```
.block {
  display: block;
}

.hidden {
  display: none;
}
```
## for循环

在制作网格系统的时候，大家应该对 .col1~.col12 这样的印象较深。在 CSS 中你需要一个一个去书写，但在 Sass 中，可以使用 @for 循环来完成。在 Sass 的 @for 循环中有两种方式：

```
@for $i from <start> through <end>
@for $i from <start> to <end>
```
- $i 表示变量
- start 表示起始值
- end 表示结束值

这两个的区别是关键字 through 表示包括 end 这个数，而 to 则不包括 end 这个数。

## while循环
@while 指令也需要 SassScript 表达式（像其他指令一样），并且会生成不同的样式块，直到表达式值为 false 时停止循环。这个和 @for 指令很相似，只要 @while 后面的条件为 true 就会执行。

这里有一个 @while 指令的简单用例：

```
//SCSS
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}
```
编译出来的 CSS

```
.while-4 {
  width: 24px;
}

.while-3 {
  width: 23px;
}

.while-2 {
  width: 22px;
}

.while-1 {
  width: 21px;
}
```
## @each循环

@each 循环就是去遍历一个列表，然后从列表中取出对应的值。

@each 循环指令的形式：

```
@each $var in <list>
```

如果你没有接触过列表，也不要紧，他也非常简单。

在下面的例子中你可以看到，$var 就是一个变量名，<list> 是一个 SassScript 表达式，他将返回一个列表值。变量 $var 会在列表中做遍历，并且遍历出与 $var 对应的样式块。

```
$list: adam john wynn mason kuroir;//$list 就是一个列表

@mixin author-images {
    @each $author in $list {
        .photo-#{$author} {
            background: url("/images/avatars/#{$author}.png") no-repeat;
        }
    }
}

.author-bio {
    @include author-images;
}
```
编译出 CSS:

```
.author-bio .photo-adam {
  background: url("/images/avatars/adam.png") no-repeat; }
.author-bio .photo-john {
  background: url("/images/avatars/john.png") no-repeat; }
.author-bio .photo-wynn {
  background: url("/images/avatars/wynn.png") no-repeat; }
.author-bio .photo-mason {
  background: url("/images/avatars/mason.png") no-repeat; }
.author-bio .photo-kuroir {
  background: url("/images/avatars/kuroir.png") no-repeat; }
```
