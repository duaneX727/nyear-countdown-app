const yearEl = document.getElementById('year');
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('mins');
const secondEl = document.getElementById('secs');

const newYearTime = new Date('1 Jan 2024 00:00:00').getTime();
countdown();
function countdown() {
  const now = new Date().getTime();
  const year = new Date().getFullYear();
  const gap = newYearTime - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const y = year+1;
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  yearEl.innerText = y;
  
  setTimeout(() => {
    countdown();
  }, 1000);
}