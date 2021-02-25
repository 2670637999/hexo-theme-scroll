## 一个极简的 Hexo 主题

简约而不简单。<a href="https://chenjiehai.gitee.io">预览</a>

### SEO
- 1.自定义文章描述/关键字
- 2.自定义首页描述/关键字
- 3.自定义标题
- 4.自定义 URL

### 文章
- 自定义封面
- 自定义小标题

### 评论
- 集成了第三方 Valine 评论系统

### 动画
- 0.5 ~ 1秒 渐进式过渡动画

### 更新
(2021-2-25更新) Scroll 3.1
- 调整电脑端与手机端字体大小和颜色显示
- 圆角更圆

(2021-2-24更新) Scroll 3.0
- 主题文件布局重构,加入 Vue.js
- 新增代码高亮 highlight
- 新增返回页面顶部按钮
- 手机端细节调整
- 重写菜单样式,换为 ElementUi 
- 部分元素溢出问题修复
- 页面切换动画调整


(2021-2-17更新) Scroll 2.0
- 新增本地文章实时搜索样式
- 新增手机端适应界面样式
- 界面细节调整
- 若干细节修复

### 搜索
因为搜索模块没有集成在主题中，使用搜索前可安装
```
npm install hexo-generator-search
```
### 自定义封面

首页和文章页默认指向 _config.yml 的 imageCover 属性.
文章页中也可设置 imageCover.

### 菜单

菜单的定义位于 nav.ejs 中,可根据个人需求更改.

### 配置文件

```
# 主题指向
theme: Scroll

# 网站名称
title: 陈陈菌博客
# 首页小标题
subtitle: ''
# 首页描述
description: '首页描述'
# 首页关键字
keywords: 首页关键字

# 作者
author: ChenJieHai

# 网站地址
url: https://chenjiehai.gitee.io
# 站点根目录地址
root: /
# 文章url规则(需要在文章抬头中定义 "id: xxx" )    
permalink: :id.html

# 首页图片封面
imageCover: background.jpg

# 评论
valine:
  el: '#vcomments'
  appId: ''
  appKey: ''

# 搜索
search:
  path: search.xml
  field: post

# 首页最大文章数
per_page: 10
pagination_dir: page

# 是否生成文章资源文件夹（与 md 名称一致）
post_asset_folder: true

# 部署
deploy:
  type: ''

```


因为这是我第一次制作主题，所以可能会出现些问题，

相关问题可通过社交帐号来反馈，或给我留言。https://blog.glumi.cn 

当然，希望你能够喜欢这个主题。