const minuteElem = document.querySelector('.minute');
const secondElem = document.querySelector('.second');

const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');

let minute = 00;
let second = 00;

let interval

const startTimer = () => {
   second++
   if (second <= 9) {
      secondElem.textContent = "0" + second
   } 
   if (second > 9) {
      secondElem.textContent = second
   } 
   if (second > 60) {
      minute++
      minuteElem.textContent = "0" + minute
      second = 0
      secondElem.textContent = "0" + second
   }
}

btnStart.addEventListener("click", () => {
   // clearInterval(interval)
      interval = setInterval(startTimer, 1000)
   })

btnStop.addEventListener('click', () => {
   clearInterval(interval)
})