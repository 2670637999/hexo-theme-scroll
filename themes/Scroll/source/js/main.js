
$(function(){
    var el = $("#content");
    var a = $('#about');
    var cm = $('#comment');

    el.animate({'opacity':1},500);
    a.animate({'opacity':1},1000);
    cm.animate({'opacity':1},1000);

    el.animate({'margin':'50px auto'},1000);
    a.animate({'top': '50px'},1500);
    // cm.animate({'opacity':1},1000);

    // hljs.initHighlightingOnLoad();
});

