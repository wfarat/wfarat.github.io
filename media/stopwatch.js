let date = new Date();
let timer = new Date();
let clock = 0;
let stopTime;
const hourC = document.getElementById('hour');
const minuteC = document.getElementById('minute');
const secondC = document.getElementById('second');
let interv;
let hour = 0;
let minute = 0;
let second = 0;
function stopwatch() {
    date = Date.now();
    clock = (date - timer) / 1000;
    hour = Math.floor(clock / 3600);
    minute = Math.floor((clock % 3600) / 60);
    second = Math.floor(clock % 60);
    if (second < 10) {
        secondC.innerHTML = '0' + second;
    } else {
        secondC.innerHTML = second;
    }
    if (minute < 10) {
        minuteC.innerHTML = '0' + minute;
    } else {
        minuteC.innerHTML = minute;
    }
    if (hour < 10) {
        hourC.innerHTML = '0' + hour;
    } else {
        hourC.innerHTML = hour;
    }
}

function reset() {
    clearInterval(interv);
    interv = null;
    timer = Date.now();
    secondC.innerHTML = '00';
    minuteC.innerHTML = '00';
    hourC.innerHTML = '00';
    stopTime = null;
}
function start() {
    if (!interv && !stopTime) {
        timer = Date.now();
        interv = setInterval(stopwatch, 100);
    } else if (!interv && stopTime) {
        timer = Date.now() - stopTime;
        interv = setInterval(stopwatch, 100);
    }
}
function stop() {
    clearInterval(interv);
    interv = null;
    stopTime = date - timer;
}
 
const startB = document.getElementById('begin');
const stopB = document.getElementById('stop');
const resetB = document.getElementById('reset');
startB.addEventListener('click', start);
stopB.addEventListener('click', stop);
resetB.addEventListener('click', reset);