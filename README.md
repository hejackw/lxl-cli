# lxl-cli
自己开发的一个简单的脚手架工具,已经上传到npm,可以实现自己上传模板,初始化模板,下载模块.

# 安装
```
npm i lxl-cli -g
```

# 使用
```

  Commands:
    lxl-cli-help                         查看所有命令
    lxl-cli-add                          可以上传一个新模板
    lxl-cli-delete                       可以删除一个模板
    lxl-cli-show                         展示所有模板
    lxl-cli-init <模板名> <自定义项目名>   可以将你上传的模板初始化到本地，和vue，react一类的初始化项目的脚手架一样

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

# 说明
敲击lxl-cli-help  命令可以查看命令帮助。

lxl-cli-add 命令可以上传一个模板，输入回车后会有回话提示，其中上传模板路径指的是你的github项目地址。比如在开发中你觉得有的模板还不错你可以先上传的github,比如你的github项目地址为https://github.com/xxx/xxx，那你的模板路径指的就是xxx/xxx。

lxl-cli-delete 可以删除一个模板。有的模板你添加后觉得不想要了，就可以删除，输入 lxl-cli-delete 命令后回车，会提示你输入想删除的模板名，输入后就可以删除了。

lxl-cli-show 可以查看目前你上传了多少个模板，我默认上传了一个名为 "vue-template" 的模板。

lxl-cli-init <模板名> <自定义项目名> 可以将你上传的模板初始化到本地，和vue，react一类的初始化项目的脚手架一样。模板名就是你上传的模板名称，自定义项目名就是你初始化后本地项目名。例如 lxl-cli-init vue-template myvue 回车后就会在你本地创建一个myvue的项目，项目内容就是vue-template模板内容。

# 总结

  我们平时可以把vue或者react的初始化模板加点料，比如路由，数据请求之类的封装到模板里。然后上传到github之后在通过lxl-cli-add添加到模板列表里，下次就直接lxl-cli-init <模板名> <自定义项目名>就可以得到一个封装后的项目模板了，不用辛苦每次都去封装模板了。