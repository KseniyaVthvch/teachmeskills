const minutesElem = document.querySelector('.time__minutes')
const secondsElem = document.querySelector('.time__seconds')
const buttonStart = document.querySelector('.start')
const buttonStop = document.querySelector('.stop')
let minutes = 0
let seconds = 0
let interval


const timer = () => {
   seconds++
   if (seconds <= 9) {
      secondsElem.innerText = "0" + seconds
   }
   if (seconds > 9) {
      secondsElem.innerText = seconds
   }
   if (seconds > 59) {
      minutes++
      minutesElem.innerText = '0' + minutes
      seconds = '00'
      secondsElem.innerText = seconds
   }
}

buttonStart.addEventListener("click", () => {
   interval = setInterval(timer, 1000)
})
buttonStop.addEventListener("click", () => {
   clearInterval(interval)
})
