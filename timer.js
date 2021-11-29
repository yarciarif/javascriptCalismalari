	function CountDownTimer(dt)
{
var end = new Date(dt);
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
function showRemaining() {
var now = new Date();
var distance = end - now;
if (distance &amp;lt; 0) {
clearInterval(timer);
document.getElementById('countdown').innerHTML = 'DOLDU!';
return;
}
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);
var minutes = Math.floor((distance % _hour) / _minute);
var seconds = Math.floor((distance % _minute) / _second);
document.getElementById(id).innerHTML = days + ' gün ';
document.getElementById(id).innerHTML += hours + ' saat ';
document.getElementById(id).innerHTML += minutes + ' dakika ';
document.getElementById(id).innerHTML += seconds + ' saniye';
}
timer = setInterval(showRemaining, 1000);
}
