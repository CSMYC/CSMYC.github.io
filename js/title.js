//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '欸~你的网络好像出了点问题，请重新链接一下网络';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '哈，网络又连上了';
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
