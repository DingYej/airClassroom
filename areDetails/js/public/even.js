// 防抖
function throttle(f, wait) {
    var timer = null;
    return function(...args) {
        var context = this;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            f.apply(context, ...args)
        }, wait)
    }
}

// 事件处理
var event = {
    mouseoverEven: function(element, callback) {
        $(element).on("mouseover", throttle(callback))
    },
    mouseleaveEven: function(element, callback) {
        $(element).on("mouseleave", throttle(callback))
    },
    clickEven: function(element, callback) {
        $(element).on("click", throttle(callback))
    },
    scrollEven: function(id, element) {
        var that = this;
        $(document).ready(function() {
            var isbottom = false
            $(window).scroll(function() {
                if (isbottom) return
                var a = $("#" + id).offset().top;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
                    isbottom = true
                    that.animationEven(element)
                }
            });
        });
    },
    animationEven: function(element) {
        $($(element)).animate({
            "left": '0px',
            "opacity": 1
        }, 1000);
    }
}

event.clickEven(".nav li", function() {
    $(this).addClass("active").siblings().removeClass("active")
})