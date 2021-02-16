## 一个极简的 Hexo 主题

简约而不简单。<a href="https://chenjiehai.gitee.io/">预览</a>

### SEO
- 1.自定义文章描述/关键字
- 2.自定义首页描述/关键字
- 3.自定义标题
- 4.自定义 URL

### 评论
- 集成了第三方 Valine 评论系统

### 动画
- 0.5 ~ 1秒 渐进式过渡动画

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
### 页眉背景图片

主题的顶部图片默认指向主题目录的 /source/ 下，只要替换 background.jpg 即可。

### 配置文件

```
# 主题指向                     
theme: Scroll                   
# 博客标题                     
title: 陈陈菌的博客              
# 作者                         
author: ChenJieHai            
# 站点url                      
url: https://blog.glumi.cn       
# 站点目录                     
root: /                        
# 文章url规则(需要在文章抬头中定义 "id: xxx" )                 
permalink: :id.html           



# 归档页面指向
archivesRoot: /archive/
# 关于页面指向(可自定义正文)
aboutRoot: /about/
# 分类页面指向
categoryRoot: /category/
# 标签页面指向
tageRoot: /tage/
# 留言页面指向
lyRoot: /ly/

# 关于页面的头像
aboutImage: '/favicon.ico'
# 关于页面QQ帐号
QQ: ****
# 关于页面GitHub用户名
GitHub: ****
# 关于页面邮箱帐号
Email: ****@qq.com

# 显示页面数
per_page: 4
pagination_dir: page

# 指定资源目录
source_dir: source
# 是否生成文章资源文件夹（与 md 名称一致）
post_asset_folder: true

# 评论
valine:
  el: '#vcomments'
  appId: ''
  appKey: ''

# 首页描述（SEO）
description: '首页描述'
keyword: 首页关键字

# 部署 
deploy:
  type: git
  repo: 
  branch: 
```


因为这是我第一次制作主题，所以可能会出现些问题，

相关问题可通过社交帐号来反馈，或给我留言。https://blog.glumi.cn 

当然，希望你能够喜欢这个主题。
