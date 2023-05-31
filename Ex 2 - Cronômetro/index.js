const hourTime = document.getElementById("hour");

var h = 0, m = 0, s = 0, t = 0;
var pauseButton = true;
var delay = 60 * 60 * 1000;

setInterval(myTime, 1);

function timeOut() {
    document.getElementById("hour").innerHTML = (h < 10) ? `0${h}` : h;
    document.getElementById("min").innerHTML = (m < 10) ? `0${m}` : m;
    document.getElementById("sec").innerHTML = (s < 10) ? `0${s}` : s;
    document.getElementById("thous").innerHTML = (t < 10) ? `0${t}` : t;
}

function myTime() {
    if (pauseButton == false) {
        if (t < 60) {
            t++;
            timeOut()
        }
        else if (t >= 60 && s < 60) {
            t = 0;
            s++;
            timeOut()
        }
        else if (s >= 60 && m < 60) {
            t = 0;
            s = 0;
            m++;
            timeOut()
        }
        else if (m >= 60) {
            t = 0;
            s = 0;
            m = 0;
            h++;
            timeOut()
        }
    }
}
function startFunction() {
    pauseButton = false;
}

function pauseFunction() {
    pauseButton = true;
}

function resetFunction() {
    h = 0, m = 0, s = 0, t = 0;
    pauseButton = true;
    timeOut();
}



