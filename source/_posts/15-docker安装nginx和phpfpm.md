---
title: 15-docker安装nginx和phpfpm
date: 2019-04-07 18:47:26
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1554634049718
---
## docker 安装 nginx

```
docker pull nginx
```

```
 docker run -d -p 8080:80 -v /Users/wujingxiu/Workspace/2019/docker/nginx/www:/usr/share/nginx/html -v /Users/wujingxiu/Workspace/2019/docker/nginx/conf.d:/etc/nginx/conf.d --name my-nginx nginx
```

在 `conf.d` 文件夹里新建 `default.conf`

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}


```

## docker 安装 php-fpm

```
docker run -d -p 9000:9000 --name my-phpfpm -v /Users/wujingxiu/Workspace/2019/docker/nginx/www:/var/www/html bitnami/php-fpm
```
在`default.conf`添加

```
    location ~ \.php(.*)$ {
      root   /var/www/html/;
      fastcgi_pass 172.17.0.3:9000;   #php容器的IP地址
      fastcgi_index index.php;
      fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      fastcgi_param PATH_INFO $fastcgi_path_info;
      fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
      include  fastcgi_params;
    }
```

> 参考文章   
> [docker部署MySQL+PHP-FPM+Nginx服务](https://zhuanlan.zhihu.com/p/59863793)  
> [Nginx+Php-fpm运行原理详解](https://segmentfault.com/a/1190000007322358?utm_source=tag-newest)   
> [Docker 从容器中拷贝文件到宿主机中](https://blog.csdn.net/libertine1993/article/details/80651552)
