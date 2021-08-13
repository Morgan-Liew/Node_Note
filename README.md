# Node.js 自学笔记

### 命令行窗口

    - 开始菜单 => 运行 => cmd
    
    - 常用指令：
    
        dir         列出当前目录下所有文件
        cd 目录名   进入到指定目录 
        md          创建文件
    
    - 目录
    
        .           当前目录
        ..          上一级目录
    
    - 环境变量
    
        path 保存路径
        将一些常用的文件或程序的路径添加到path下，就可以在任意位置访问文件

### 进程与线程

     进程 
        - 负责为程序的运行提供必备的环境
        - 相当于工厂中车间
    
     线程 
        - 计算机中最小的计算单位，负责执行保存到进程中的程序
        - 相当于工厂中工人
    
     单线程
        - JS
    
     多线程
        - Java

     I / O (Input / Output)
        - I/O 操作指的是对磁盘的读写操作

## 1.Node.js 简介
+ Node.js是一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境
+ Node采用Google开发的V8引擎运行js代码，使用事件驱动、非阻塞和异步I/O等技术来提高性能，可优化应用程序的传输量和规模
+ Node大部分基本模块都用JavaScript编写。在Node出现之前，JS通常作为客户端程序设计语言使用，以JS写的程序常在用户的浏览器上运行


创作者：瑞安.达尔

**客户端 - 服务器 Node 处理请求**

![响应/请求](./assets/Node_01.png)

### Node 历史
![node历史](./assets/Node_02.png)

### Node 的用途
+ Web服务API
+ 实时多人游戏
+ 后端的Web服务，例如跨域、服务端的请求
+ 基于Web的应用
+ 多客户端的通信，如即使通信

Node
    - Node是ES标准的一个实现，也是一个JS引擎
    - 通过Node可以使js代码在服务器端执行
    - Node仅仅对ES标准进行了实现，不包含DOM 和 BOM
    - Node中可以使用所有的内建对象
    - Node可以在后台来编写服务器 --- 单线程服务器
    - Node处理请求时单线程，但在后台拥有一个 I/O 线程池

### 模块化简介

   ECMAScript标准的缺陷
+ 没有模块系统
+ 标准库较少
+ 没有标准接口
+ 缺乏管理系统

   在Node中，一个js文件就是一个模块
   在Node中，每一个js文件中的js代码都是独立运行在一个函数中
   而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
   需要通过 exports 来向外部暴露变量和方法

   在node中，通过require()函数引入外部模块
   require("文件路径");
   引入外部模块时，通过模块标识来找到指定模块

   引入模块后，该函数会返回一个对象，这个对象代表的是一个引入的模块

   模块分成两大类
      核心模块
         - 由node引擎提供的模块
      文件模块
         - 由用户创建的模块

   node中，全局对象为global ，类似于网页中的window
      在全局中创建的变量都会作为global的属性保存
      在全局中创建的函数都会作为global的方法保存

   当node在执行模块中的代码时，会先在代码的最顶部添加：
      function(exports,require,module,_filename,_dirname){}

   即实际上模块中的代码都会包装在一个函数中执行，且在函数执行时同时传进5个参数
      exports
         - 该对象用来将变量或函数暴露到外部

      require
         - 用来引入外部的模块

      module
         - module 代表当前模块本身
         - exports也是module的属性

      __filename
         - 当前模块完整路径

      __dirname
         - 当前模块所在文件夹的完整路径

exports 和 module.exports
      - 通过exports 只能使用.的方式来向外暴露内部变量
         exports.xxx = xxx

      - 而module.exports既可以通过.的形式，也可以直接赋值
         module.exports.xxx = xxxx
         module.exports = {}

### 包 package

+ CommonJS的包含规范允许将一组相关的模块组合到一起，形成一组完整的工具。
+ CommonJS的包规范由包结构和包描述文件两个部分组成
+ 包结构
      - 用于组织包中的各种文件
      包实际上就是一个压缩文件，解压后还原为目录
      应包含如下文件：
         - package.json   描述文件
         - bin   可执行二进制文件
         - lib   js代码
         - doc   文档
         - test  单元测试

+ 包描述文件
      - 描述包的相关信息，以供外部读取分析
      用于表达非代码相关的信息，是一个JSON格式文件，位于包的根目录下

### npm简介
    Node Package Manage ，Node.js 标准的软件包管理器

    NPM 命令
    查看版本     npm -v
    查看包版本 npm version
    帮助说明     npm
    搜索模块包   npm search packageName
    当前目录安装 npm install packageName
    全局模式安装 npm install packageName -g
    写入生产依赖 --save

    国内镜像 => cnpm

### node引入包的流程
    node引入模块时：
      先在当前目录的node_modules中寻找是否含有该模块，有则直接使用
      没有则去上一级目录的node_modules中寻找，有则直接使用
      还没有则再去上一级目录寻找，直到找到并使用
      最后到磁盘的根目录，还没有，则报错



