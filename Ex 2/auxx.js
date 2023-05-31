const hourTime = document.getElementById("hour");

var h = 0, m = 0, s = 0, t = 0;
var pauseButton = false;
var delay = 60 * 60 * 1000;

setInterval(myHourTime, delay)
setInterval(myMinTime, 1000)
setInterval(mySecTime, 0.001)

function myHourTime() {
    if (pauseButton == false) {
        document.getElementById("hour").innerHTML = h;
    }
}

function myMinTime() {
    if (pauseButton == false) {
        m++;
        document.getElementById("min").innerHTML = m;
    }
}

function mySecTime() {
    if (pauseButton == false) {
        s++;
        document.getElementById("sec").innerHTML = s;
    }
}

function mySecTime() {
    if (pauseButton == false) {
        t++;
        document.getElementById("thous").innerHTML = t;
    }
}



function pauseFunction() {
    pauseButton = true;
}



