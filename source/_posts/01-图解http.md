---
title: 01-图解http
date: 2019-03-28 09:15:35
tags: 前端-15-读书笔记
categories: 前端-15-读书笔记
id : 1553735719353
---

## 1.1 3 项 WWW 构建技术分别是:
- 把SGML（StandardGeneralizedMarkupLanguage，标准通用标记语言）作为页面的文本标记语言的HTML（HyperTextMarkupLanguage，超文本标记语言）；
- 作为文档传递协议的HTTP；
- 指定文档所在地址的URL（UniformResourceLocator，统一资源定位符）。

## 1.2 TCP/IP 的分层管理
- 应用层：FTP、 DNS、HTTP 
- 传输层：TCP（传输控制协议）和 UDP（用户数据报
协议）
- 网络层
- 数据链路层

![image](http://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/0FFFFFF4301C46069D77D34D160F7C05/12889)

利用 TCP/IP 协议族进行网络通信时，会通过分层顺序与对信。**发送端从应用层往下走，接收端则往应用层往**

## 1.3 IP 协议的作用
IP 协议的作用是把各种数据包传送给对方。而要保证确实传送到对方
那里，则需要满足各类条件。其中两个重要的条件是:
- IP 地址:节点被分配到的地址，

- MAC
地址（Media Access Control Address）:指网卡所属的固定
地址。

## 1.4 TCP三次握手

发送端首先发送一个带 SYN 标志的数据包给对方。接收端收到后，
回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。

![image](http://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/1EE9531AC8354885A8287A270F773276/12902)

## 2.1 持久连接

为解决上述 TCP 连接的问题，HTTP/1.1 和一部分的 HTTP/1.0 想出了**持久连接**（HTTP Persistent Connections，也称为 HTTP keep-alive 或HTTP connection reuse）的方法。持久连接的特点是，**只要任意一端没有明确提出断开连接，则保持 TCP 连接状态**。

## 5.1 通信数据转发程序代理

- 是否使用缓存：缓存代理
- 是否会修改报文：透明代理、非透明代理

## 6.1 HTTP 请求报文

![image](http://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/C8116E9DC4924E5BBCA00A3EDB03388A/12934)

## 6.2 HTTP 响应报文

在响应中，HTTP 报文由 HTTP 版本、状态码（数字和原因短语）、HTTP 首部字段 3 部分构成
![image](http://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/585625065B754EB9B0B37B1DDD2EEA0F/12940)

## 6.3 HTTP 首部字段根据实际用途被分为以下 4 种类型

- **通用首部字段（General Header Fields）**：

    请求报文和响应报文两方都会使用的

- **请求首部字段（Request Header Fields）**
    
    从客户端向服务器端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。

- **响应首部字段（Response Header Fields）**
    
    从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息。

- **实体首部字段（Entity Header Fields）**

    针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。
    
## 6.4 Cache-Control中no-cache和no-store区别

从字面意思上很容易把 no-cache 误解成为不缓存，但事实上 no-cache 代表不缓
存过期的资源，缓存会向源服务器进行有效期确认后处理资源，也许称为 `do-notserve-from-cache-without-revalidation` 更合适。`no-store` 才是真正地不进行缓存，请
读者注意区别理解。

## 6.4 请求首部字段

-  Host

    请求被发送至服务器时，请求中的主机名会用IP地址直接替换解决。但如果这时，相同的 IP地址下部署运行着多个域名，那么服务器就会无法理解究竟是哪个域名对应的请求。因此，就需要使用首部字段Host来明确指出请求的主机名。若服务器未设定主机名，那直接发送一个空值即可。
    
- If-xxx
    
    形如 If-xxx 这种样式的请求首部字段，都可称为条件请求。服务器接收到附带条件的请求后，只有判断指定条件为真时，才会执行请求

- If-Match

    请求首部 If-Match 的使用表示这是一个条件请求。在请求方法为 `GET` 和 `HEAD` 的情况下，服务器仅在请求的资源满足此首部列出的 ETag 之一时才会返回资源。而对于 `PUT` 或其他非安全方法来说，只有在满足条件的情况下才可以将资源上传

- If-Modified-Since
    
    If-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。获取资源的更新日期时间，可通过确认首部字段 `Last-Modified` 来确定

## 6.5 响应首部字段

- etag

    `Etag`是属于`HTTP 1.1`属性，它是由服务器生成返回给前端，当你第一次发起HTTP请求时，服务器会返回一个Etag，并在你第二次发起同一个请求时，客户端会同时发送一个`If-None-Match`，而它的值就是`Etag`的值（此处由发起请求的客户端来设置）。然后，服务器会比对这个客服端发送过来的Etag是否与服务器的相同，
    
    如果相同，就将`If-None-Match`的值设为`false`，返回状态为`304`，客户端继续使用本地缓存，不解析服务器返回的数据（这种场景服务器也不返回数据，因为服务器的数据没有变化嘛）如果不相同，就将`If-None-Match`的值设为`true`，返回状态为`200`，客户端重新解析服务器返回的数据
    
## 6.6 实体首部字段

- Allow
    
    首部字段 Allow 用于通知客户端能够支持 Request-URI 指定资源的所有 HTTP 方法。当服务器接收到不支持的 HTTP 方法时，会以状态码405 Method Not Allowed 作为响应返回。与此同时，还会把所有能支持的 HTTP 方法写入首部字段 Allow 后返回。

- Content-Encoding

    主要采用以下 4 种内容编码的方式。
    
    - gzip
    - compress
    - deflate
    - identity

-  Expires

    当首部字段 Cache-Control 有指定 max-age 指令时，比起首部字段 Expires，会优先处理 max-age 指令。
    
## 6.7 为 Cookie 服务的首部字段

首部字段名 | 说明 | 首部类型
---|---|---
Set-Cookie  | 开始状态管理所使用的Cookie信息 |  响应首部字段
Cookie  | 服务器接收到的Cookie信息 |  请求首部字段

## 7.1 HTTP 的缺点

- 通信使用明文（不加密），内容可能会被窃听
- 不验证通信方的身份，因此有可能遭遇伪装
- 无法证明报文的完整性，所以有可能已遭篡改：(中间人攻击)

## 7.2 HTTP+ 加密 + 认证 + 完整性保护=HTTPS

通常，HTTP 直接和 TCP 通信。当使用 SSL时，则演变成先和 SSL通信，再由 SSL和 TCP 通信了。简言之，所谓 HTTPS，其实就是身披SSL协议这层外壳的 HTTP

![image](http://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/E5FCAD5BEA324A2A950805988F9557EB/13026)

SSL是独立于 HTTP 的协议，所以不光是 HTTP 协议，其他运行在应用层的 SMTP 和 Telnet 等协议均可配合 SSL协议使用。可以说 SSL是当今世界上应用最为广泛的网络安全技术

## 7.3 相互交换密钥的公开密钥加密技术

- **共享密钥加密的困境**：在互联网上转发密钥时，如果通信被监听那么密钥就可会落入攻击者之手，同时也就失去了加密的意义
- **使用两把密钥的公开密钥加密**：

    公开密钥加密使用一对非对称的密钥。一把叫做私有密钥（private key），另一把叫做公开密钥（public key）。顾名思义，私有密钥不能让其他任何人知道，而公开密钥则可以随意发布，任何人都可以获得

    使用公开密钥加密方式，发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥进行解密。利用这种方式，不需要发送用来解密的私有密钥，也不必担心密钥被攻击者窃听而盗走
    
    
## 7.4 HTTPS 采用混合加密机制

HTTPS 采用共享密钥加密和公开密钥加密两者并用的混合加密机制。若密钥能够实现安全交换，那么有可能会考虑仅使用公开密钥加密来通信。但是公开密钥加密与共享密钥加密相比，其处理速度要慢。

所以应充分利用两者各自的优势，将多种方法组合起来用于通信。在交换密钥环节使用公开密钥加密方式，之后的建立通信交换报文阶段则使用共享密钥加密方式。

## 8 补充

> [白话TCP为什么需要进行三次握手](https://mp.weixin.qq.com/s/KwO5izk6j5uOC2KcHusIvA)  
> [浅析HTTP/2的多路复用](https://segmentfault.com/a/1190000011172823)