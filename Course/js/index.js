layui.use(['laypage', 'layer'], function() {
    var laypage = layui.laypage,
        layer = layui.layer;
    //完整功能
    laypage.render({
        elem: 'demo7',
        count: 100,
        layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip'],
        jump: function(obj) {
            console.log(obj)
        }
    });
})


event.mouseoverEven(".courseList div", function() {
    $(this).addClass("courseListActive")
})
event.mouseleaveEven(".courseList div", function() {
    $(this).removeClass("courseListActive")
})

event.clickEven("#grade li", function() {
    $(this).addClass("active").siblings().removeClass("active")
})
event.clickEven("#classification li", function() {
    $(this).addClass("active").siblings().removeClass("active")
})
event.clickEven("#sorting li", function() {
    $(this).addClass("active").siblings().removeClass("active")
})