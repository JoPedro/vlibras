var myVideo1 = document.getElementById("video1"); 

var btn_play = document.getElementById("playpause");
var btn_stop = document.getElementById("btn_stop");
var bar = document.getElementById("bar");

myVideo1.onended = function() {
    myVideo1.currentTime = 0;
    btn_play.innerHTML = "Play";
};

btn_play.addEventListener("click", function () {
    myVideo1.paused ? (btn_play.innerHTML = "Pause", myVideo1.play()) : (btn_play.innerHTML = "Play", myVideo1.pause())
});

btn_stop.addEventListener("click", function () {
    myVideo1.currentTime = 0;
    myVideo1.pause();
    btn_play.innerHTML = "Play";
});

/*g.addEventListener("click", function (k) {
    this.rect = g.getBoundingClientRect();
    this.a = (k.clientX - this.rect.left) / g.clientWidth;
    a.currentTime = a.duration * this.a
});*/

myVideo1.addEventListener("timeupdate", function () {
    bar.style.width = myVideo1.currentTime / myVideo1.duration * 100 + "%";
    myVideo1.ended && (btn_play.innerHTML = "Play")
});
