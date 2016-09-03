![](http://labimg.qiniudn.com/Busic/3.png)

# 163music-Aplayer-you-get-mod

如你所见，这是一个基于项目 163music-Aplayer-you-get 的网易云音乐外链播放器

相比原版增加的东西有：

- 增加了有列表时显示歌词的功能
- 因为播放长歌单时加载比较久所以加上一个简单的缓存（但长歌单首次加载也是会慢的）
- 播放列表里可以显示专辑名字（以后考虑加上开关）
- 支持显示合唱歌手
- 更新至当前最新版的 APlayer
- 增加了几个调整播放器的参数，如调整颜色的 `color=` 和调整高度的 `height=`
- 美（chou）化了原版的 APlayer

## 使用方法

### player 模式

进入部署完成的首页即可看到搜索框，可输入关键词进行搜索，点击搜索结果进入播放页面。（此功能仅用以试听、获取 id 号，不建议直接嵌入网页）

### iframe 模式

首先指定 `album=`、`song=`、`playlist=`、`program=`、`radio=`、`mv=` 中的一个的 id。（分别是专辑、单曲、歌单、节目、电台、MV）

然后自行调整以下自定义参数：

- `qlrc=` 控制歌词开关，值 1 为开，默认值 0 为关
- `qssl=` 控制 ssl 连接开关，值 1 为开，默认值 0 为关
- `qnarrow=` 控制迷你版播放界面的开关，值 1 为开，默认值 0 为关
- `max_width=` 控制播放器最大宽度，默认值 100%，可定义为 20em，500px 等
- `height=` 控制播放器高度，默认值 20em
- `autoplay=` 控制自动播放开关，默认值 1 为开，值 0 为关
- `color=` 定制播放器高亮颜色，可定义为 blue，pink，rgb(0,0,0), #999 等

#### 示例

歌单：[http://busic.daoapp.io/iframe?playlist=90664422&qlrc=1&height=20em](http://busic.daoapp.io/iframe?playlist=90664422&qlrc=1&height=20em)

专辑（迷你模式）：[http://busic.daoapp.io/iframe?album=13384&qnarrow=1&height=0](http://busic.daoapp.io/iframe?album=13384&qnarrow=1&height=0)

单曲：[http://busic.daoapp.io/iframe?song=193801&max_width=25em&autoplay=1&qlrc=1&height=25em](http://busic.daoapp.io/iframe?song=193801&max_width=25em&autoplay=1&qlrc=1&height=25em)

[![](http://labimg.qiniudn.com/Busic/4.png)](http://labimg.qiniudn.com/Busic/4.png)

[![](http://labimg.qiniudn.com/Busic/5.png)](http://labimg.qiniudn.com/Busic/5.png)

[![](http://labimg.qiniudn.com/Busic/6.png)](http://labimg.qiniudn.com/Busic/6.png)

[![](http://labimg.qiniudn.com/Busic/7.png)](http://labimg.qiniudn.com/Busic/7.png)

## 部署方法

### 如何部署到线上

项目内自带一个 Dockerfile，在支持 Docker 的应用托管网站上可以直接导入。具体方法：

1. Fork 本项目
1. 注册 [DaoCloud](http://daocloud.io)
2. 绑定 GitHub 账号
3. 进入控制台，在 `代码构建` 处 `创建新项目`，代码仓库搜索本项目并选择创建
4. 在 `选择一个分支或标签` 处，选择 `master` 并 `手动创建`
5. 进入 `应用列表`，点 `创建应用`，所属镜像选刚刚创建的，创建成功后等待启动并找到网址
6. 可以用了

### 如何本地部署 APlayer

clone 本项目到本地后，进入目录内，执行 `npm install`，`npm install webpack -g`

对 APlayer.js 作出更改后，要使其生效，请 `webpack`

## 故障解决

如果看到 Error happens 字样，最大可能就是网易云已经下架该资源或是更新了 API，请默哀。

## 特别鸣谢

[APlayer](http://aplayer.js.org/) / [Dplayer](https://github.com/DIYgod/DPlayer) / [flask-python351](https://hub.docker.com/r/yuxio/flask-python351/) / [you-get](https://you-get.org/)

MIT License.

原版 README 请点击 [此处](https://github.com/YUX-IO/163music-APlayer-you-get-docker/blob/master/README.md) 查看。