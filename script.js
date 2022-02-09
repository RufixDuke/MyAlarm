var hours = document.querySelector('.hour');
var minutes = document.querySelector('.minute');
var seconds = document.querySelector('.seconds');
var sess = document.querySelector('.session')
var currentTime = document.querySelector('.current-time');


function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    // if (h == 0) {
    //     h = 0;
    // }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    // h = (h < 10) ? "0" + h : h;
    // m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;

    // var head = ` <h2>Current Time</h2> ${session}`
    // text = document.createElement('p')
    // text.innerHTML = head;
    // currentTime.appendChild(text);

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    sess.innerHTML = session;

    // console.log(valueHour)


    // var time = h.textContent + ":" + m.innerText + ":" + s + " " + session;

    // document.getElementById("display-time").innerText = time;

    // document.getElementById("display-time").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

const setBtn = document.querySelector('.btn1');
const resetBtn = document.querySelector('.btn2');
const audio = document.getElementById('xyz');

var setHours = document.querySelector('.setHour');
var minH = 00;
var maxH = 11;
for (var i = minH; i <= maxH; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    setHours.appendChild(opt);
}
// var value = setHours.options[setHours.selectedIndex].value;
// console.log(value)

var setMinute = document.querySelector('.setMinute');
var minM = 00;
var maxM = 59;
for (var i = minM; i <= maxM; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    setMinute.appendChild(opt);
}

var setSeconds = document.querySelector('.setSeconds');
var minS = 00;
var maxS = 59;
for (var i = minS; i <= maxS; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    setSeconds.appendChild(opt);
}

var valueHour, valueMin, valueSec;
var displayAlarm = document.querySelector('.alarm-time')
var alarmTime;

setBtn.addEventListener('click', () => {
    // setHours.innerHTML = hours.innerHTML;
    // setMinute.innerHTML = minutes.innerHTML;
    // setSeconds.innerHTML = seconds.innerHTML;

    valueHour = setHours.options[setHours.selectedIndex].value;
    console.log(valueHour)
    valueMin = setMinute.options[setMinute.selectedIndex].value;
    console.log(valueMin)
    valueSec = setSeconds.options[setSeconds.selectedIndex].value;
    console.log(valueSec)

    alarmTime = `
                        <div class="hours">${valueHour}</div>
                        <div class="minutes">${valueMin}</div>
                        <div class="second">${valueSec}</div>
                    `

    text = document.createElement('div');
    text.setAttribute('class', 'block')
    text.innerHTML = alarmTime;
    // displayAlarm.innerHTML = text.innerHTML;
    displayAlarm.appendChild(text);



    console.log(text.innerHTML)

})

console.log(hours.innerHTML)
console.log(setHours.options[setHours.selectedIndex].value)

if (
    setHours.options[setHours.selectedIndex].value == hours.innerHTML
    // valueMin == minutes.innerHTML &&
    // valueSec == seconds.innerHTML
    // setHours.options[setHours.selectedIndex].value === hours.innerHTML &&
    // setMinute.options[setMinute.selectedIndex].value == minutes.innerHTML &&
    // setSeconds.options[setSeconds.selectedIndex].value == seconds.innerHTML
) {
    alarm()
} else {
    console.log("yyy")
}

function alarm() {
    audio.play();
    console.log('Thank you');
}

resetBtn.addEventListener('click', () => {
    displayAlarm.innerHTML = ""
})