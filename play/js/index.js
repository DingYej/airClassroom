let player = new Player({
    id: 'mse',
    autoplay: false,
    volume: 0.3,
    url: 'http://video.dearedu.com/20150522gzzdl/20150611-045848-5578f96867171.mp4',
    // poster: "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    playsinline: true,
    lang: 'zh-cn',
    videoInit: true,
    height: 580,
    width: 800
});
// console.log((player.video).addEventListener())
player.video.addEventListener("timeupdate", function() {
    var timeDisplay = player.video.currentTime;
    console.log(timeDisplay)
})
player.video.addEventListener('loadedmetadata', function() {
    //设置上次播放时间lastLearnTime(秒)
    player.video.currentTime = "20";
});