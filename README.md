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

### 配置
```yml
########### 站点 ###########

# 主题指向                     
theme: Scroll                   
# 博客标题                     
title: 陈陈菌的博客              
# 作者                         
author: ChenJieHai            
# 站点url                      
url: http://example.com        
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
  type: ''
```

