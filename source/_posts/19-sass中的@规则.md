---
title: 19-sass中的@规则
date: 2018-05-03 10:57:37
tags: 前端-07-scss
categories: 前端-07-scss
id : 1537686729132
---
## @import

Sass 扩展了 CSS 的 @import 规则，让它能够引入 SCSS 和 Sass 文件。 所有引入的 SCSS 和 Sass 文件都会被合并并输出一个单一的 CSS 文件。 另外，被导入的文件中所定义的变量或 mixins 都可以在主文件中使用。

Sass 会在当前目录下寻找其他 Sass 文件， 如果是 Rack、Rails 或 Merb 环境中则是 Sass 文件目录。 也可以通过 :load_paths 选项或者在命令行中使用 --load-path 选项来指定额外的搜索目录。

@import 根据文件名引入。 默认情况下，它会寻找 Sass 文件并直接引入， 但是，在少数几种情况下，它会被编译成 CSS 的 @import 规则：

- 如果文件的扩展名是 .css。
- 如果文件名以 http:// 开头。
- 如果文件名是 url()。
- 如果 @import 包含了任何媒体查询（media queries）。

如果上述情况都没有出现，并且扩展名是 .scss 或 .sass， 该名称的 Sass 或 SCSS 文件就会被引入。 如果没有扩展名， Sass 将试着找出具有 .scss 或 .sass 扩展名的同名文件并将其引入。

例如：

```
@import "foo.scss";
```

或

```
@import "foo";
```

两者都将引入 foo.scss 文件， 而

```
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```

将被编译为：

```
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```
也可以通过一个 @import 引入多个文件。例如：

```
@import "rounded-corners", "text-shadow";
```

将引入 rounded-corners 和 text-shadow 两个文件。


如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件， 这时，你就可以在文件名前面加一个下划线，就能避免被编译。 这将告诉 Sass 不要把它编译成 CSS 文件。 然后，你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线。

例如，你有一个文件叫做 _colors.scss。 这样就不会生成 _colors.css 文件了， 而且你还可以这样做：

```
@import "colors";//不用加下划线
```

来引入 _colors.scss 文件。

注意，在同一个目录不能同时存在带下划线和不带下划线的同名文件。 例如， _colors.scss 不能与 colors.scss 并存。
#### 嵌套 @import

虽然大部分时间只需在顶层文件使用 @import 就行了， 但是，你还可以把他们包含在 CSS 规则 和 @media 规则中。

来看官网提供的一个简单示例：

假设要引入的样式文件`example.scss`文件中包含这样的代码：

```
.example {
  color: red;
}
```

然后这样引用：

```
#main {
  @import "example";
}
```

编译出来的 CSS：

```
#main .example {
  color: red;
}
```
### @media

Sass 中的 @media 指令和 CSS 的使用规则一样的简单，但它有另外一个功能，可以嵌套在 CSS 规则中。有点类似 JS 的冒泡功能一样，如果在样式中使用 @media 指令，它将冒泡到外面。来看一个简单示例：

```
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

编译出来：

```
.sidebar {
  width: 300px; }
  @media screen and (orientation: landscape) {
    .sidebar {
      width: 500px; } }
```
### @extend

Sass 中的 @extend 是用来扩展选择器或占位符。比如：

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.error.intrusion {
  background-image: url("/image/hacked.png");
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```
#### 多个扩展

所设某个样式要继承多个地方的样式，那么可以使用 @extend 来继承多个选择器或占位符的样式，如：

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.attention {
  font-size: 3em;
  background-color: #ff0;
}
.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 3px;
}
```

编译出来的CSS

```
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.attention, .seriousError {
  font-size: 3em;
  background-color: #ff0; }

.seriousError {
  border-width: 3px; }
```
#### 扩展单一选择器

前面我们知道 %placeholder 不使用@extend显示调用是不会生成任何样式代码。那么在选择器中使用占位符一样。比如下面的代码：

```
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
```

这段代码在不调用之前不产生任何代码，只有能过@extend调用之后才生成代码：

```
.notice {
  @extend %extreme;
}
```

编译出来的CSS

```
#context a.notice {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
```
## @at-root

@at-root 从字面上解释就是跳出根元素。当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root。来看一个简单的示例：

```
.a {
  color: red;

  .b {
    color: orange;

    .c {
      color: yellow;

      @at-root .d {
        color: green;
      }
    }
  }  
}
```

编译出来的CSS

```
.a {
  color: red;
}

.a .b {
  color: orange;
}

.a .b .c {
  color: yellow;
}

.d {
  color: green;
}
```
## @debug 
@debug 在 Sass 中是用来调试的，当你的在 Sass 的源码中使用了 @debug 指令之后，Sass 代码在编译出错时，在命令终端会输出你设置的提示 Bug:

```
@debug 10em + 12em;
```

会输出：

```
Line 1 DEBUG: 22em
```
## @warn
@warn 和 @debug 功能类似，用来帮助我们更好的调试 Sass。如：

```
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @warn "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn "Assuming #{$y} to be in pixels";
    $y: 1px * $y;
  }
  position: relative; left: $x; top: $y;
}
```
## @error

@error 和 @warn、@debug 功能是如出一辙。
