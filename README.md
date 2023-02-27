TypeScript ExtJS Es6 Class Extend Issue Demo
====================

使用es6的class语法： `class extend`，将会运行时报错：

```
Class constructor MyPanel cannot be invoked without 'new'
```

原因是：当前发布的extjs代码是用google的编译器编译的，代码结构不允许我们使用es6语法去继承它们生成的类。

在某些版本中也许可以有限使用，但全面使用应该是在之后的8.x
https://stackoverflow.com/questions/59663966/ext-js-is-it-possible-with-open-tooling-and-ext-js-7-to-use-es6-class-syntax

所以当前最好还是使用`Ext.define`和`Ext.create`之类

```
npm install
npm start
```

It will open page on browser automatically.
