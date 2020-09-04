layui.use('table', function() {
    var table = layui.table,
        form = layui.form;

    table.render({
        elem: '#test',
        url: 'http://localhost:3000/my/ml',
        cellMinWidth: 80,
        limit: 10,
        cols: [
            [
                { type: 'numbers', title: '排序', width: 70, },
                { field: 'id', title: '课程名称', width: 500, templet: function(d) { return '<div id="courseName" style = "text-align:left">' + d.id + '</div>' } },
                { field: 'username', title: '主讲老师', align: "center" },
                { field: 'city', title: '上线时间', align: "center", },
                { field: 'wealth', title: '课程时长', minWidth: 120 },
                { field: 'sex', title: '观看时长', align: "center", width: 120, templet: '#switchTpl', },
                { field: 'lock', align: "center", title: '继续学习', width: 120, templet: function(d) { return '<div id="lock">' + "继续听课" + '</div>' } }
            ]
        ],
        page: true
    });

});

setTimeout(function() {
    event.clickEven(".detailsForm #lock", function() {
        layer.open({
            type: 1,
            title: "",
            area: ['580px', ""],
            content: $('#prompt')
        });
    })
}, 300);