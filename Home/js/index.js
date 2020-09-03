// 轮播图开始
(function() {
    var imgNumber = $(".subBanner").length;
    if (imgNumber > 1) {
        var mySwiper = new Swiper('#swiper1', {
            autoplay: 3000, //可选选项，自动滑动
            loop: true, // 循环模式选项
            pagination: '.swiper-pagination',
            paginationClickable: true,
            fade: {
                crossFade: true,
            },
            autoplayDisableOnInteraction: false
        });
    } else if (imgNumber <= 2) {
        var mySwiper = new Swiper('#swiper1', {
            autoplay: false,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            loop: true,
        });

    }
})()
// 轮播图结束
// 直播日历 鼠标滑过
event.mouseoverEven('.liveLists', function() {
    $(this).addClass("tcis")
}, 100)

event.mouseleaveEven('.liveLists', function() {
    $(this).removeClass("tcis")
}, 100)

// 免费试听 鼠标滑过
event.mouseoverEven('.FreeList div', function() {
    $(this).addClass("selected")
}, 100)
event.mouseleaveEven('.FreeList div', function() {
    $(this).removeClass("selected")
}, 100)

// 精彩回放 鼠标滑过
event.mouseoverEven('.playbackList div', function() {
    $(this).addClass("wonderful")
}, 100)
event.mouseleaveEven('.playbackList div', function() {
    $(this).removeClass("wonderful")
}, 100)

// 词汇真经 动画
event.scrollEven("Vocabulary", ".Primary")
event.scrollEven("Vocabulary", ".Er")
event.scrollEven("teachers", ".teachers_k img")
event.scrollEven("teachers", ".teacherIntroduced")
console.log(window.timer)


// 日历
var x = minsData.sayName(),
    current = minsData.sayName(),
    lastMonth,
    currentData;


function time() {
    currentData = minsData.getYMWeek(x.year, x.month);
    lastMonth = minsData.getYMWeek(x.year, (x.month) - 1).length - 1;
    if (minsData.DayWeek() != "1") {
        currentData.unshift(minsData.getYMWeek(x.year, (x.month) - 1)[lastMonth])
    }
    if (x.month < 12) {
        $("#add").addClass("choose")
    } else {
        $("#add").removeClass("choose")
    }
    if (x.month > current.month) {
        $("#Reduction").addClass("choose")
    } else {
        $("#Reduction").removeClass("choose")
    }
    document.getElementById("calendar").innerHTML = "";
    document.getElementById("liveRl").innerHTML = "";
    //document.getElementById("liveList").innerHTML = ""; 点击add按钮清空课程
    for (var i in currentData) {
        var k = Number(i) + 1;
        $("<li><span>第" + k + "周</span><span>" + currentData[i].weekTime + "</span></li>").appendTo($("#calendar"))
        $(".calendar li").eq(minsData.getMonthWeek(x.year, x.month, x.s2) - 1).addClass("actives");
    }
    event.clickEven(".calendar li", function() {
        var idx = $(this).index()
        $(this).addClass("actives").siblings().removeClass("actives")
            // 获取点击的几周
        console.log(currentData[idx])
    })
    document.getElementById("liveRl").innerHTML = x.year + "年" + x.month + "月";
}
window.onload = time();
// 日历加按钮
event.clickEven("#add", function() {
    x.month++;
    if (x.month > 12) {
        alert("傻逼哦")
        return false;
    }
    time()
})

// 日历减按钮
event.clickEven("#Reduction", function() {
    x.month--;
    if (x.month < current.month) {
        alert("傻逼哦")
        return false;
    }
    time()
})

// 关闭页面清除定时器
// window.onbeforeunload = function() {
//     clearTimeout(timer)
// }