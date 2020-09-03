var minsData = {
    // 今天是第几周
    getMonthWeek: function(a, b, c) {
        var date = new Date(a, parseInt(b) - 1, c),
            w = date.getDay(),
            d = date.getDate();
        return Math.ceil(
            (d + 6 - w) / 7
        );
    },

    getYMWeek: function(year, month) {
        var list = [],
            d1,
            weekCount,
            d = new Date();
        d.setFullYear(year, month - 1, 1);
        var w1 = d.getDay();
        if (w1 === 0) w1 = 7;
        d.setFullYear(year, month, 0);
        var dd = d.getDate();
        if (w1 !== 1) {
            d1 = (7 - w1) + 2;
        } else {
            d1 = 1;
        }
        weekCount = Math.ceil(((dd - d1) + 1) / 7);
        for (var i = 0; i < weekCount; i += 1) {
            var monday = d1 + (i * 7),
                sunday = monday + 6,
                from = month + "月" + monday + "日",
                to;
            if (sunday <= dd) {
                to = month + "月" + sunday + "日";
            } else {
                d.setFullYear(year, month - 1, sunday);
                to = (d.getMonth() + 1) + "月" + d.getDate() + "日";
            }
            var json = {
                'year': year,
                'month': month,
                'week': i + 1,
                'weekTime': from + "-" + to
            };
            list.push(json);
        }
        return list;
    },
    // 当前日期
    sayName: function() {
        var day2 = new Date();
        day2.setTime(day2.getTime());
        var dataJson = {
            "s2": day2.getDate(),
            "year": day2.getFullYear(),
            "month": day2.getMonth() + 1
        }
        return dataJson;
    },

    // 当前月是否是1号是周几
    getd: function(date, day) {
        result = day - (date % 7 - 1);
        re = result < 0 ? 7 + result : result;
        return re;
    },
    DayWeek: function() {
        var myDate = new Date();
        date = myDate.getDate();
        day = myDate.getDay();
        re = this.getd(date, day);
        return re;
    }
}