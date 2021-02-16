var searchFunc = function(path, search_id, content_id) {
    'use strict'; //使用严格模式
    $.ajax({
        url: path,
        dataType: "xml",
        success: function( xmlResponse ) {
            // 从xml中获取相应的标题等数据
            var datas = $( "entry", xmlResponse ).map(function() {
                return {
                    title: $( "title", this ).text(),
                    content: $("content",this).text(),
                    url: $( "url" , this).text()
                };
            }).get();
            //ID选择器
            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function(){
                var str='<ul class=\"search-result-list\">';                
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }
                // 本地搜索主要部分
                datas.forEach(function(data) {
                    var isMatch = true;
                    var content_index = [];
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g,"").toLowerCase();
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // 只匹配非空文章
                    if(data_title != '' && data_content != '') {
                        keywords.forEach(function(keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);
                            if( index_title < 0 && index_content < 0 ){
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    }
                    // 返回搜索结果
                    if (isMatch) {
                    //结果标签
                        str += "<li><a href='"+ data_url +"' class='search-result-title' target='_blank'>"+ "> " + data_title +"</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g,"");
                        if (first_occur >= 0) {
                            // 拿出含有搜索字的部分
                            var start = first_occur - 6;
                            var end = first_occur + 6;
                            if(start < 0){
                                start = 0;
                            }
                            if(start == 0){
                                end = 10;
                            }
                            if(end > content.length){
                                end = content.length;
                            }
                            var match_content = content.substr(start, end); 
                            // 列出搜索关键字，定义class加高亮
                            keywords.forEach(function(keyword){
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">"+keyword+"</em>");
                            })
                            str += "<p class=\"search-result\">" + match_content +"...</p>"
                        }
                    }
                })
                $resultContent.innerHTML = str;
            })
        }
    })
};
var path = "../search.xml";

var bool = false;
var MobileNaVBool = false;
var MobileSearchBool = false;

$(function(){
    var content = $("#content");
    var about = $('#Menu');
    var comment = $('#comment');
    var search = $('#search'); 
    var searchResult = $('#local-search-result');
    var MobileNavButton = $('#MobileHead'); 
    var MobileNavMenu = $('#MobileHead ul'); 
    var MobileSearch = $('#MobileSearch');
    var MobileSearchButton = $('#MobileSearchButton');
    var mSbutton = $('#MSbutton');

    content.animate({'opacity':1},500);
    about.animate({'opacity':1},1000);
    comment.animate({'opacity':1},1000);
    searchResult.animate({'opacity':1},1000);
    about.animate({'top': '50px'},1500);

    function setSearchButtonDate(){
        if(MobileSearchBool){
            MobileSearch.css('display','block');
            MobileSearch.animate({'opacity':'0.91'},300);
        }else{
            MobileSearch.animate({'opacity':'0'},300);
            MobileSearch.css('display','none');
        }
    }

    $('#Menu ul li:nth-last-child(1)').click(function(){
        if(bool){
            search.animate({'opacity':0,'left':'-920px'},500);
        }else{
            search.animate({'opacity':1,'left':'70px'},500);
        }
        bool = !bool;
    });
    MobileNavButton.click(function(){
        MobileNaVBool = !MobileNaVBool;
        if(MobileNaVBool){
            $('#MobileHead ul li a').animate({'opacity':'1'},200);
            MobileNavMenu.animate({'width':'100px','height':'240px'},200);
            MobileNavMenu.css({'display':'grid'});
        }else{
            $('#MobileHead ul li a').animate({'opacity':'0'},200);
            MobileNavMenu.animate({'display':'none','width':'0px','height':'0px'},200);
            MobileNavMenu.css({'display':'none'});
        }
    });

    if(screen.width <= 750){
        content.animate({'margin':'0px auto'},1000);
        MobileNavButton.css('display','grid');

    }else if (screen.width > 750){
        content.animate({'margin':'50px auto','border-radius':'10px'},1000);
        MobileNavButton.css('display','none');
    }

    mSbutton.click(function(){
        MobileSearchBool = false;
        setSearchButtonDate();
    });

    MobileSearchButton.click(function(){
        MobileSearchBool = true;
        setSearchButtonDate();
    });
    searchFunc(path, 'local-search-input', 'local-search-result');
    searchFunc(path, 'local-search-input2', 'local-search-result2');
});
